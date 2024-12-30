import type { Block } from 'payload'

export const INTRO_LAYOUTS = {
  CENTERED: 'centered',
  DEFAULT: 'default',
  FULL_WIDTH: 'full-width',
} as const

export type IntroLayout = (typeof INTRO_LAYOUTS)[keyof typeof INTRO_LAYOUTS]

export const IntroBlock: Block = {
  fields: [
    {
      defaultValue: INTRO_LAYOUTS.DEFAULT,
      label: 'Layout',
      name: 'layout',
      options: [
        {
          label: 'Standard',
          value: INTRO_LAYOUTS.DEFAULT,
        },
        {
          label: 'Zentriert',
          value: INTRO_LAYOUTS.CENTERED,
        },
        {
          label: 'Volle Breite',
          value: INTRO_LAYOUTS.FULL_WIDTH,
        },
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'Überschrift',
      name: 'headline',
      type: 'text',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      type: 'textarea',
    },
    {
      label: 'Hintergrundbild',
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      fields: [
        {
          label: 'Text',
          name: 'text',
          required: true,
          type: 'text',
        },
        {
          label: 'URL',
          name: 'url',
          required: true,
          type: 'text',
        },
      ],
      label: 'Links',
      name: 'links',
      type: 'array',
    },
    {
      fields: [
        {
          label: 'Bezeichnung',
          name: 'label',
          required: true,
          type: 'text',
        },
        {
          label: 'Wert',
          name: 'value',
          required: true,
          type: 'text',
        },
      ],
      label: 'Statistiken',
      name: 'stats',
      type: 'array',
    },
  ],
  labels: {
    plural: 'Einführungen',
    singular: 'Einführung',
  },
  slug: 'intro',
}
