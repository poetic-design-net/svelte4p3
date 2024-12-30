import type { Block } from 'payload'

export const SimpleButton: Block = {
  fields: [
    {
      label: 'Text',
      name: 'text',
      required: true,
      type: 'text',
    },
    {
      label: 'Link',
      name: 'link',
      required: true,
      type: 'text',
    },
    {
      defaultValue: 'default',
      label: 'Stil',
      name: 'style',
      options: [
        {
          label: 'Standard',
          value: 'default',
        },
        {
          label: 'Sekundär',
          value: 'secondary',
        },
        {
          label: 'Outline',
          value: 'outline',
        },
        {
          label: 'Destruktiv',
          value: 'destructive',
        },
        {
          label: 'Ghost',
          value: 'ghost',
        },
        {
          label: 'Link',
          value: 'link',
        },
        {
          label: 'Accent',
          value: 'accent',
        },
      ],
      type: 'select',
    },
  ],
  interfaceName: 'SimpleButton',
  labels: {
    plural: 'Buttons',
    singular: 'Button',
  },
  slug: 'simpleButton',
}
