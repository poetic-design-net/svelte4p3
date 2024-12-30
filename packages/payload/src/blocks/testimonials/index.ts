import type { Block } from 'payload'

export const Testimonial: Block = {
  fields: [
    {
      defaultValue: 'default',
      label: 'Layout',
      name: 'layout',
      options: [
        {
          label: 'Standard',
          value: 'default',
        },
        {
          label: 'Inhalt links mit großem Avatar',
          value: 'content-left-large-avatar',
        },
        {
          label: 'Raster mit Sidebar',
          value: 'grid-with-sidebar',
        },
      ],
      type: 'select',
    },
    {
      fields: [
        {
          label: 'Name',
          name: 'name',
          required: true,
          type: 'text',
        },
        {
          label: 'Position',
          name: 'position',
          required: true,
          type: 'text',
        },
        {
          label: 'Testimonial Headline',
          name: 'testimonialheadline',
          required: false,
          type: 'text',
        },
        {
          label: 'Profilbild',
          name: 'image',
          relationTo: 'media',
          type: 'upload',
        },
        {
          label: 'Zitat',
          name: 'quote',
          required: true,
          type: 'textarea',
        },
      ],
      label: 'Testimonials',
      minRows: 1,
      name: 'testimonials',
      type: 'array',
    },
  ],
  labels: {
    plural: 'Testimonials',
    singular: 'Testimonial',
  },
  slug: 'testimonial',
}
