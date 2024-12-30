import type { Block } from 'payload'

export const BLOG_POSTS_LAYOUTS = {
  DEFAULT: 'default',
} as const

export const BlogPosts: Block = {
  fields: [
    {
      label: 'Titel',
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      type: 'text',
    },
    {
      defaultValue: BLOG_POSTS_LAYOUTS.DEFAULT,
      label: 'Layout',
      name: 'layout',
      options: Object.values(BLOG_POSTS_LAYOUTS).map(layout => ({
        label: layout.charAt(0).toUpperCase() + layout.slice(1),
        value: layout,
      })),
      required: true,
      type: 'select',
    },
    {
      hasMany: true,
      label: 'Artikel',
      name: 'articles',
      relationTo: 'articles',
      required: true,
      type: 'relationship',
    },
  ],
  labels: {
    plural: 'Blog Posts',
    singular: 'Blog Post',
  },
  slug: 'blogPosts',
}
