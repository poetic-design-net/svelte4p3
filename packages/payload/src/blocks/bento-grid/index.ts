import type { Block } from 'payload'

export const BENTO_LAYOUTS = {
  LARGE: 'large',
  STANDARD: 'standard',
} as const

export const CONTENT_TYPES = {
  CODE: 'code',
  DEFAULT: 'default',
} as const

export const BENTO_GRID_ITEMS = 4

export type BentoGridBlockProps = {
  backgroundColor?: string
  items: {
    contentType?: (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES]
    description: string
    image?: {
      alt?: string
      url?: string
    }
    layout: (typeof BENTO_LAYOUTS)[keyof typeof BENTO_LAYOUTS]
    title: string
  }[]
  subtitle?: string
  title?: string
}

export const bentoGrid: Block = {
  fields: [
    {
      admin: {
        description: 'Die Hauptüberschrift des Bento Grids',
      },
      label: 'Überschrift',
      localized: true,
      name: 'title',
      type: 'text',
    },
    {
      admin: {
        description: 'Ein optionaler Untertitel unter der Überschrift',
      },
      label: 'Untertitel',
      localized: true,
      name: 'subtitle',
      type: 'text',
    },
    {
      admin: {
        description: 'Die vier Elemente des Bento Grids',
      },
      fields: [
        {
          fields: [
            {
              admin: {
                description: 'Der Titel des Bento Elements',
                width: '50%',
              },
              label: 'Titel',
              localized: true,
              name: 'title',
              required: true,
              type: 'text',
            },
            {
              admin: {
                description: 'Der Typ des Inhalts bestimmt das Layout',
                width: '50%',
              },
              defaultValue: CONTENT_TYPES.DEFAULT,
              label: 'Inhaltstyp',
              name: 'contentType',
              options: [
                { label: 'Standard', value: CONTENT_TYPES.DEFAULT },
                { label: 'Code/API', value: CONTENT_TYPES.CODE },
              ],
              type: 'select',
            },
          ],
          type: 'row',
        },
        {
          admin: {
            description:
              'Die Beschreibung des Elements. Bei Code/API-Typ wird dies als Code-Snippet angezeigt.',
          },
          label: 'Beschreibung',
          localized: true,
          name: 'description',
          required: true,
          type: 'textarea',
        },
        {
          admin: {
            description:
              'Ein optionales Bild für das Element. Bei Code/API-Typ wird dies ignoriert.',
          },
          label: 'Bild',
          name: 'image',
          relationTo: 'media',
          type: 'upload',
        },
        {
          admin: {
            description: 'Das Layout bestimmt die Größe des Elements im Grid',
          },
          defaultValue: BENTO_LAYOUTS.STANDARD,
          label: 'Layout',
          name: 'layout',
          options: [
            { label: 'Groß (Volle Höhe)', value: BENTO_LAYOUTS.LARGE },
            { label: 'Standard', value: BENTO_LAYOUTS.STANDARD },
          ],
          required: true,
          type: 'select',
        },
      ],
      label: 'Elemente',
      maxRows: BENTO_GRID_ITEMS,
      minRows: BENTO_GRID_ITEMS,
      name: 'items',
      type: 'array',
    },
    {
      admin: {
        description: 'Die Hintergrundfarbe des Blocks (Hex, RGB oder RGBA)',
      },
      defaultValue: '#ffffff',
      label: 'Hintergrundfarbe',
      name: 'backgroundColor',
      type: 'text',
    },
  ],
  labels: {
    plural: 'Bento Grids',
    singular: 'Bento Grid',
  },
  slug: 'bento-grid',
}
