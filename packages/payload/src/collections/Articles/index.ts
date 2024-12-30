import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  lexicalEditor,
  LinkFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

import { env } from '@local/env/payload'
import { AdminAccess } from '@local/payload/access/AdminAccess'
import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'
import { SimpleButton } from '@local/payload/blocks/simpleButton'
import { SimpleImage } from '@local/payload/blocks/simpleImage'
import { VideoEmbed } from '@local/payload/blocks/videoEmbed'
import { hideFromIndexingField } from '@local/payload/fields/hideFromIndexing'
import { publishedDateField } from '@local/payload/fields/publishedDate'
import { slugField } from '@local/payload/fields/slug'
import { titleField } from '@local/payload/fields/title'
import { PopulatePublishDateHook } from '@local/payload/hooks/PopulatePublishDateHook'
import { RevalidatePageHook } from '@local/payload/hooks/RevalidatePageHook'

export const Articles: CollectionConfig<'articles'> = {
  access: {
    create: AdminAccess,
    delete: AdminAccess,
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'status', 'updatedAt', 'publishedDate'],
    group: 'Content',
    livePreview: {
      url: ({ data }) => {
        if ('slug' in data && typeof data.slug === 'string') {
          return `${env.NEXT_PUBLIC_PAYLOAD_URL}/articles/${data.slug}?isLivePreview=true`
        }

        return ''
      },
    },
    pagination: {
      defaultLimit: 25,
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      tabs: [
        {
          fields: [
            ...titleField(),
            {
              label: 'Kategorie',
              name: 'category',
              options: [
                { label: 'News', value: 'news' },
                { label: 'Tutorial', value: 'tutorial' },
                { label: 'Guide', value: 'guide' },
                { label: 'Case Study', value: 'case-study' },
              ],
              required: true,
              type: 'select',
            },
            {
              label: 'Featured Image',
              name: 'featuredImage',
              relationTo: 'media',
              required: true,
              type: 'upload',
            },
            {
              label: 'Lesezeit',
              name: 'readTime',
              required: true,
              type: 'text',
            },
            {
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  LinkFeature({
                    fields: ({ defaultFields }) => [
                      ...defaultFields,
                      {
                        admin: {
                          description:
                            'The rel attribute defines the relationship between a linked resource and the current document.',
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
                  BlocksFeature({
                    blocks: [SimpleButton, SimpleImage, VideoEmbed],
                  }),
                ],
              }),
              label: 'Inhalt',
              name: 'content',
              required: true,
              type: 'richText',
            },
          ],
          label: 'Content',
        },
        {
          fields: [...slugField()],
          label: 'Path Setup',
        },
      ],
      type: 'tabs',
    },
    ...publishedDateField(),
    ...hideFromIndexingField(),
  ],
  hooks: {
    afterChange: [RevalidatePageHook],
    beforeChange: [PopulatePublishDateHook],
  },
  slug: 'articles',
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
}
