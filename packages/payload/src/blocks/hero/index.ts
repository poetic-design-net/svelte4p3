import type { Block } from 'payload'

export const HERO_LAYOUTS = {
  CENTERED: 'centered',
  LEFT_ALIGNED: 'leftAligned',
  MINIMAL: 'minimal',
  SPLIT: 'split',
} as const

export const hero: Block = {
  fields: [
    {
      admin: {
        description: 'Wählen Sie das Layout für diesen Hero-Bereich',
      },
      defaultValue: HERO_LAYOUTS.CENTERED,
      name: 'layout',
      options: [
        {
          label: 'Zentriert',
          value: HERO_LAYOUTS.CENTERED,
        },
        {
          label: 'Linksbündig',
          value: HERO_LAYOUTS.LEFT_ALIGNED,
        },
        {
          label: 'Split Layout',
          value: HERO_LAYOUTS.SPLIT,
        },
        {
          label: 'Minimal',
          value: HERO_LAYOUTS.MINIMAL,
        },
      ],
      required: true,
      type: 'select',
    },
    {
      admin: {
        description:
          'Aktivieren Sie diese Option, um den Hero-Block im Vollbildmodus anzuzeigen',
      },
      defaultValue: false,
      label: 'Vollbild',
      name: 'fullscreen',
      type: 'checkbox',
    },
    {
      admin: {
        description: 'Die Hauptüberschrift des Hero-Blocks',
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
      admin: {
        description: 'Ein optionales Hintergrundbild',
      },
      label: 'Hintergrundbild',
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      admin: {
        description: 'Wählen Sie den Typ des Hintergrunds',
      },
      defaultValue: 'image',
      label: 'Hintergrundtyp',
      name: 'backgroundType',
      options: [
        {
          label: 'Farbe',
          value: 'color',
        },
        {
          label: 'Gradient',
          value: 'gradient',
        },
        {
          label: 'Bild',
          value: 'image',
        },
        {
          label: 'Video',
          value: 'video',
        },
      ],
      type: 'select',
    },
    {
      admin: {
        description: 'Optionen für das Hintergrund-Overlay',
      },
      fields: [
        {
          admin: {
            description: 'Die Farbe des Overlays (Hex, RGB oder RGBA)',
          },
          defaultValue: '#000000',
          label: 'Farbe',
          name: 'color',
          type: 'text',
        },
        {
          admin: {
            description: 'Die Deckkraft des Overlays in Prozent',
          },
          defaultValue: 50,
          label: 'Deckkraft',
          max: 100,
          min: 0,
          name: 'opacity',
          type: 'number',
        },
        {
          admin: {
            description: 'Wählen Sie einen Gradienten für das Overlay',
          },
          defaultValue: 'none',
          label: 'Gradient',
          name: 'gradient',
          options: [
            {
              label: 'Kein Gradient',
              value: 'none',
            },
            {
              label: 'Linear (von oben nach unten)',
              value: 'linear-to-b',
            },
            {
              label: 'Linear (von unten nach oben)',
              value: 'linear-to-t',
            },
            {
              label: 'Linear (von links nach rechts)',
              value: 'linear-to-r',
            },
            {
              label: 'Linear (von rechts nach links)',
              value: 'linear-to-l',
            },
          ],
          type: 'select',
        },
      ],
      label: 'Hintergrund-Overlay',
      name: 'overlay',
      type: 'group',
    },
    {
      admin: {
        description: 'Optionaler Akzent über der Überschrift',
      },
      fields: [
        {
          admin: {
            description: 'Der Haupttext des Akzents',
          },
          label: 'Text',
          name: 'text',
          type: 'text',
        },
        {
          admin: {
            description: 'Der Link für den Akzent',
          },
          label: 'Link',
          name: 'link',
          type: 'text',
        },
        {
          admin: {
            description: 'Der Text für den Akzent-Link',
          },
          label: 'Link Text',
          name: 'linkText',
          type: 'text',
        },
      ],
      label: 'Akzent',
      name: 'accent',
      type: 'group',
    },
    {
      admin: {
        description: 'Optionale Call-to-Action Schaltfläche',
      },
      fields: [
        {
          label: 'Text',
          name: 'text',
          type: 'text',
        },
        {
          label: 'Link',
          name: 'link',
          type: 'text',
        },
      ],
      label: 'Call to Action',
      name: 'cta',
      type: 'group',
    },
    {
      admin: {
        description: 'Der Text für den "Mehr erfahren" Link',
      },
      label: 'Mehr erfahren Text',
      name: 'learnMoreText',
      type: 'text',
    },
    {
      admin: {
        description: 'Der Link für den "Mehr erfahren" Button',
      },
      label: 'Mehr erfahren Link',
      name: 'learnMoreLink',
      type: 'text',
    },
  ],
  imageURL: '/media/blocks/hero-preview.jpg',
  labels: {
    plural: 'Heroes',
    singular: 'Hero',
  },
  slug: 'hero',
}
