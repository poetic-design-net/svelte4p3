import type { Block } from 'payload'

export const CardSlider: Block = {
  fields: [
    {
      fields: [
        {
          label: 'Titel',
          name: 'title',
          required: false,
          type: 'text',
        },
        {
          label: 'Beschreibung',
          name: 'description',
          required: false,
          type: 'textarea',
        },
        {
          label: 'Hintergrundbild',
          name: 'backgroundImage',
          relationTo: 'media',
          required: false,
          type: 'upload',
        },
        {
          fields: [
            {
              label: 'Nummer',
              name: 'number',
              required: false,
              type: 'number',
            },
            {
              label: 'Text',
              name: 'text',
              required: false,
              type: 'text',
            },
          ],
          label: 'Karten',
          name: 'cards',
          type: 'array',
        },
      ],
      label: 'Inhalt',
      name: 'content',
      type: 'group',
    },
    {
      fields: [
        {
          admin: {
            description:
              'Slider springt nach der letzten Karte wieder zur ersten',
          },
          defaultValue: false,
          label: 'Endlosschleife',
          name: 'loop',
          type: 'checkbox',
        },
        {
          fields: [
            {
              defaultValue: false,
              label: 'Aktivieren',
              name: 'enabled',
              type: 'checkbox',
            },
            {
              admin: {
                description: 'Zeit in Millisekunden zwischen den Slides',
              },
              defaultValue: 3000,
              label: 'Verzögerung (ms)',
              name: 'delay',
              type: 'number',
            },
            {
              defaultValue: true,
              label: 'Pause bei Hover',
              name: 'pauseOnHover',
              type: 'checkbox',
            },
          ],
          label: 'Automatisches Abspielen',
          name: 'autoplay',
          type: 'group',
        },
        {
          defaultValue: 'arrows',
          label: 'Navigation',
          name: 'navigation',
          options: [
            {
              label: 'Pfeile',
              value: 'arrows',
            },
            {
              label: 'Punkte',
              value: 'dots',
            },
            {
              label: 'Beides',
              value: 'both',
            },
            {
              label: 'Keine',
              value: 'none',
            },
          ],
          type: 'select',
        },
      ],
      label: 'Slider Einstellungen',
      name: 'sliderSettings',
      type: 'group',
    },
  ],
  labels: {
    plural: 'Card Sliders',
    singular: 'Card Slider',
  },
  slug: 'cardSlider',
}
