import type { Block } from 'payload'

export const Pricing: Block = {
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
      label: 'Beschreibung',
      name: 'description',
      type: 'textarea',
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
          label: 'Preis',
          name: 'price',
          required: true,
          type: 'text',
        },
        {
          label: 'Beschreibung',
          name: 'description',
          type: 'textarea',
        },
        {
          fields: [
            {
              label: 'Feature',
              name: 'text',
              required: true,
              type: 'text',
            },
          ],
          label: 'Features',
          name: 'features',
          type: 'array',
        },
        {
          defaultValue: 'Jetzt starten',
          label: 'CTA Text',
          name: 'ctaText',
          type: 'text',
        },
        {
          label: 'CTA Link',
          name: 'ctaLink',
          type: 'text',
        },
        {
          defaultValue: false,
          label: 'Hervorgehoben?',
          name: 'isHighlighted',
          type: 'checkbox',
        },
      ],
      label: 'Pläne',
      name: 'plans',
      type: 'array',
    },
  ],
  labels: {
    plural: 'Preisübersichten',
    singular: 'Preisübersicht',
  },
  slug: 'pricing',
}
