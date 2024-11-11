import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Config } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
      titleSuffix: ' | Fusionary CMS',
    },
    user: Users.slug,
  },
  collections: [Pages, Articles, Users, Media],
  db:
    env.PAYLOAD_PRIVATE_DATABASE_ENGINE === 'mongo'
      ? mongooseAdapter({
          url: env.PAYLOAD_PRIVATE_DATABASE_URI,
        })
      : sqliteAdapter({
          client: {
            // url: env.PAYLOAD_PRIVATE_DATABASE_URI,
            url: `file:${path.join(dirname, 'local.db')}`,
          },
        }),
  editor: lexicalEditor(),
  globals: [NavigationMenu, Footer],
  plugins: [
    nestedDocsPlusPlugin({
      breadcrumbsFieldSlug: 'breadcrumbs',
      collections: [Pages.slug],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs =>
        docs.reduce((acc, doc) => `${acc}/${doc.slug as string}`, ''),
      parentFieldSlug: 'parent',
    }),
    redirectsPlugin({
      collections: [Pages.slug, Articles.slug],
      overrides: {
        admin: {
          group: 'Site Config',
        },
      },
      redirectTypes: ['301', '302', '307', '308'],
    }),
    seoPlugin({
      collections: [Pages.slug, Articles.slug],
      fieldOverrides: {
        title: {
          required: true,
        },
      },
      generateTitle: ({ doc }) =>
        isObject(doc) && 'title' in doc && typeof doc.title === 'string'
          ? doc.title
          : '',
      tabbedUI: true,
      uploadsCollection: Media.slug,
    }),
  ],
  secret: env.PAYLOAD_PRIVATE_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts'),
  },
}

export const configurePayload = (overrides?: Partial<Config>) => {
  return buildConfig(deepMerge(baseConfig, overrides ?? {}))
}
