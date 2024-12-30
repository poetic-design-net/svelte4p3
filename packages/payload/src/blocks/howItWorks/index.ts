import type { Block } from 'payload'

export const HowItWorks: Block = {
  fields: [
    {
      defaultValue: 'default',
      label: 'Layout',
      name: 'layoutType',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'Titel',
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      fields: [
        {
          label: 'Number',
          name: 'number',
          required: true,
          type: 'text',
        },
        {
          label: 'Title',
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          label: 'Description',
          name: 'description',
          required: true,
          type: 'text',
        },
      ],
      label: 'Steps',
      name: 'steps',
      type: 'array',
    },
    {
      label: 'Image',
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
    {
      defaultValue: 'Get Started now',
      label: 'CTA Text',
      name: 'ctaText',
      type: 'text',
    },
  ],
  labels: {
    plural: 'How It Works',
    singular: 'How It Works',
  },
  slug: 'howItWorks',
}
