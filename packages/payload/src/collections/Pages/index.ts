import type { CollectionConfig } from 'payload'
import {
  createBreadcrumbsField,
  createParentField,
} from '@payloadcms/plugin-nested-docs'

import { env } from '@local/env/payload'
import { AdminAccess } from '@local/payload/access/AdminAccess'
import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'
import { hideFromIndexingField } from '@local/payload/fields/hideFromIndexing'
import { publishedDateField } from '@local/payload/fields/publishedDate'
import { slugField } from '@local/payload/fields/slug'
import { titleField } from '@local/payload/fields/title'
import { PopulatePublishDateHook } from '@local/payload/hooks/PopulatePublishDateHook'
import { RevalidatePageHook } from '@local/payload/hooks/RevalidatePageHook'

export const Pages: CollectionConfig = {
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
    group: 'Content',
    livePreview: {
      url: ({ data }) =>
        `${env.NEXT_PUBLIC_PAYLOAD_URL}${data.pathname}?isLivePreview=true`,
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
          fields: [titleField()],
          label: 'Content',
        },
        {
          fields: [
            ...slugField(),
            createParentField('pages'),
            createBreadcrumbsField('pages'),
          ],
          label: 'Path Setup',
        },
      ],
      type: 'tabs',
    },
    publishedDateField(),
    hideFromIndexingField(),
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
