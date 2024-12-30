import type { Block } from 'payload'

export const ICONS = {
  ARROW_RIGHT: 'arrow-right',
  BACKUP: 'backup',
  DEPLOY: 'deploy',
  LOGIN: 'login',
  SSL: 'ssl',
} as const

export const FEATURE_LAYOUTS = {
  CENTERED_2X2_GRID: 'centered-2x2-grid',
  DEFAULT: 'default',
  THREE_COL_ACCENT: 'three-col-accent',
  THREE_COL_ICON: 'three-col-icon',
} as const

export const features: Block = {
  fields: [
    {
      defaultValue: FEATURE_LAYOUTS.DEFAULT,
      label: 'Layout',
      name: 'layout',
      options: [
        {
          label: 'Standard',
          value: FEATURE_LAYOUTS.DEFAULT,
        },
        {
          label: 'Zentriertes 2x2 Raster',
          value: FEATURE_LAYOUTS.CENTERED_2X2_GRID,
        },
        {
          label: '3-Spalten mit Akzentüberschrift',
          value: FEATURE_LAYOUTS.THREE_COL_ACCENT,
        },
        {
          label: '3-Spalten mit Icons',
          value: FEATURE_LAYOUTS.THREE_COL_ICON,
        },
      ],
      required: true,
      type: 'select',
    },
    {
      admin: {
        condition: data => data.layout === FEATURE_LAYOUTS.THREE_COL_ACCENT,
        description: 'Eine kleinere Überschrift über der Hauptüberschrift',
      },
      label: 'Akzentüberschrift',
      name: 'accentHeadline',
      type: 'text',
    },
    {
      admin: {
        description: 'Die Hauptüberschrift des Features-Blocks',
      },
      label: 'Überschrift',
      name: 'headline',
      required: true,
      type: 'text',
    },
    {
      admin: {
        description: 'Ein optionaler Untertitel',
      },
      label: 'Unterüberschrift',
      name: 'subheadline',
      type: 'text',
    },
    {
      fields: [
        {
          defaultValue: ICONS.DEPLOY,
          label: 'Icon',
          name: 'icon',
          options: [
            {
              label: 'Deploy',
              value: ICONS.DEPLOY,
            },
            {
              label: 'SSL',
              value: ICONS.SSL,
            },
            {
              label: 'Backup',
              value: ICONS.BACKUP,
            },
            {
              label: 'Arrow Right',
              value: ICONS.ARROW_RIGHT,
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
          required: true,
          type: 'text',
        },
        {
          admin: {
            description: 'Text für den optionalen Link',
          },
          label: 'Link Text',
          name: 'linkText',
          type: 'text',
        },
        {
          admin: {
            description: 'URL für den optionalen Link',
          },
          label: 'Link URL',
          name: 'linkUrl',
          type: 'text',
        },
      ],
      label: 'Features',
      name: 'features',
      type: 'array',
    },
    {
      admin: {
        description: 'Ein optionales Bild für die rechte Seite',
      },
      label: 'Bild',
      name: 'image',
      relationTo: 'media',
      type: 'upload',
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
    plural: 'Features mit Bild',
    singular: 'Features mit Bild',
  },
  slug: 'features',
}
