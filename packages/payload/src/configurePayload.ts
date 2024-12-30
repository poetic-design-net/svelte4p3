import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Config } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import {
  BlocksFeature,
  lexicalEditor,
  LinkFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { buildConfig, deepMerge } from 'payload'

import { env } from '@local/env/payload'
import { Articles } from '@local/payload/collections/Articles'
import { Media } from '@local/payload/collections/Media'
import { Pages } from '@local/payload/collections/Pages'
import { Users } from '@local/payload/collections/Users'
import { Footer } from '@local/payload/globals/Footer'
import { NavigationMenu } from '@local/payload/globals/NavigationMenu'
import { nestedDocsPlusPlugin } from '@local/payload/plugins/nestedDocsPlusPlugin'
import { isObject } from '@local/utils/isObject'

import { CTA } from './blocks/cta'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const baseConfig: Config = {
  admin: {
    components: {
      graphics: {
        Icon: '@local/svg/Icon#Icon',
        Logo: '@local/svg/Logo#Logo',
      },
    },
    meta: {
      icons: [
        {
          rel: 'shortcut icon',
          url: '/favicon.ico',
        },
      ],
      titleSuffix: ' | FRDRK CMS',
    },
    user: Users.slug,
  },
  collections: [Pages, Articles, Users, Media],
  db: mongooseAdapter({
    url: env.PAYLOAD_PRIVATE_DATABASE_URI,
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      LinkFeature({
        // Example showing how to customize the built-in fields
        // of the Link feature
        fields: ({ defaultFields }) => [
          ...defaultFields,
          {
            admin: {
              description:
                'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            },
            hasMany: true,
            label: 'Rel Attribute',
            name: 'rel',
            options: ['noopener', 'noreferrer', 'nofollow'],
            type: 'select',
          },
        ],
      }),
      UploadFeature({
        collections: {
          uploads: {
            // Example showing how to customize the built-in fields
            // of the Upload feature
            fields: [
              {
                editor: lexicalEditor(),
                name: 'caption',
                type: 'richText',
              },
            ],
          },
        },
      }),
      // This is incredibly powerful. You can re-use your Payload blocks
      // directly in the Lexical editor as follows:
      BlocksFeature({
        blocks: [CTA],
      }),
    ],
  }),
  globals: [NavigationMenu, Footer],
  plugins: [
    nestedDocsPlusPlugin({
      breadcrumbsFieldSlug: 'breadcrumbs',
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs =>
        docs.reduce((acc, doc) => `${acc}/${doc.slug as string}`, ''),
      parentFieldSlug: 'parent',
    }),
    redirectsPlugin({
      collections: ['pages', 'articles'],
      overrides: {
        admin: {
          group: 'Site Config',
        },
      },
      redirectTypes: ['301', '302', '307', '308'],
    }),
    seoPlugin({
      collections: ['pages', 'articles'],
      fields: ({ defaultFields }) => {
        return defaultFields.map(field => {
          if ('name' in field && field.name === 'title') {
            return {
              ...field,
              required: true,
            }
          }

          return field
        })
      },
      generateTitle: ({ doc }) =>
        isObject(doc) && 'title' in doc && typeof doc.title === 'string'
          ? doc.title
          : '',
      tabbedUI: true,
      uploadsCollection: Media.slug as 'media',
    }),
  ],
  secret: env.PAYLOAD_PRIVATE_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts'),
  },
}

export const configurePayload = (overrides?: Partial<Config>) => {
  return buildConfig(deepMerge<Config>(baseConfig, overrides ?? {}))
}
