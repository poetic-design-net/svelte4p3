import type { CollectionConfig } from 'payload'
import {
  createBreadcrumbsField,
  createParentField,
} from '@payloadcms/plugin-nested-docs'
import payload from 'payload'

import { env } from '@local/env/payload'
import { AdminAccess } from '@local/payload/access/AdminAccess'
import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'
import { bentoGrid } from '@local/payload/blocks/bento-grid'
import { BlogPosts } from '@local/payload/blocks/blogPosts'
import { CardSlider } from '@local/payload/blocks/CardSlider'
import { ContentSection } from '@local/payload/blocks/contentSection'
import { CTA } from '@local/payload/blocks/cta'
import { features } from '@local/payload/blocks/features'
import { hero } from '@local/payload/blocks/hero'
import { HowItWorks } from '@local/payload/blocks/howItWorks'
import { IntroBlock } from '@local/payload/blocks/intro'
import { Newsletter } from '@local/payload/blocks/newsletter'
import { Pricing } from '@local/payload/blocks/pricing'
import { Testimonial } from '@local/payload/blocks/testimonials'
import { hideFromIndexingField } from '@local/payload/fields/hideFromIndexing'
import { publishedDateField } from '@local/payload/fields/publishedDate'
import { slugField } from '@local/payload/fields/slug'
import { titleField } from '@local/payload/fields/title'
import { PopulatePublishDateHook } from '@local/payload/hooks/PopulatePublishDateHook'
import { RevalidatePageHook } from '@local/payload/hooks/RevalidatePageHook'

export const Pages: CollectionConfig<'pages'> = {
  access: {
    create: AdminAccess,
    delete: AdminAccess,
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    defaultColumns: [
      'title',
      'pathname',
      'status',
      'updatedAt',
      'publishedDate',
    ],
    group: 'Inhalt',
    livePreview: {
      url: ({ data }) => {
        if ('pathname' in data && typeof data.pathname === 'string') {
          return `${env.NEXT_PUBLIC_PAYLOAD_URL}${data.pathname}?isLivePreview=true`
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
      admin: {
        description: 'Diese Seite als Startseite festlegen',
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          async ({ operation, value }) => {
            // If setting this doc as home
            if (value && operation === 'create') {
              // Find any other doc set as home
              const existingHome = await payload.find({
                collection: 'pages',
                where: {
                  isHome: {
                    equals: true,
                  },
                },
              })

              // If there is an existing home page, throw error
              if (existingHome.docs.length > 0) {
                throw new Error('Es kann nur eine Startseite geben.')
              }
            }

            return value as boolean
          },
        ],
      },
      name: 'isHome',
      type: 'checkbox',
    },
    {
      tabs: [
        {
          fields: [
            ...titleField(),
            {
              admin: {
                description: 'Fügen Sie Inhaltsblöcke zu Ihrer Seite hinzu',
              },
              blocks: [
                hero,
                features,
                CTA,
                bentoGrid,
                IntroBlock,
                Newsletter,
                Pricing,
                HowItWorks,
                Testimonial,
                CardSlider,
                BlogPosts,
                ContentSection,
              ],
              name: 'layout',
              required: true,
              type: 'blocks',
            },
          ],
          label: 'Inhalt',
        },
        {
          fields: [
            ...slugField(),
            createParentField('pages'),
            createBreadcrumbsField('pages'),
          ],
          label: 'Pfad-Einrichtung',
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
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
}
