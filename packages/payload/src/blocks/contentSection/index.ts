import type { Block } from 'payload'
import {
  BlocksFeature,
  lexicalEditor,
  LinkFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

import { SimpleButton } from '@local/payload/blocks/simpleButton'
import { SimpleImage } from '@local/payload/blocks/simpleImage'
import { VideoEmbed } from '@local/payload/blocks/videoEmbed'

export const ContentSection: Block = {
  fields: [
    {
      tabs: [
        {
          fields: [
            {
              label: 'Titel',
              name: 'title',
              required: true,
              type: 'text',
            },
            {
              label: 'Kategorie',
              name: 'category',
              type: 'text',
            },
            {
              label: 'Lesezeit',
              name: 'readTime',
              type: 'text',
            },
            {
              label: 'Bild',
              name: 'featuredImage',
              relationTo: 'media',
              type: 'upload',
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
              type: 'richText',
            },
          ],
          label: 'Content',
        },
      ],
      type: 'tabs',
    },
  ],
  labels: {
    plural: 'Content Sections',
    singular: 'Content Section',
  },
  slug: 'contentSection',
}
