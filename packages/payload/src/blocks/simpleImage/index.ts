import type { Block } from 'payload'

export const SimpleImage: Block = {
  fields: [
    {
      label: 'Bild',
      name: 'image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      label: 'Alt-Text',
      name: 'altText',
      required: true,
      type: 'text',
    },
  ],
  imageAltText: 'Bild',
  interfaceName: 'SimpleImage',
  labels: {
    plural: 'Bilder',
    singular: 'Bild',
  },
  slug: 'simpleImage',
}
