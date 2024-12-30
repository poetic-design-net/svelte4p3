import type {
  Block,
  CheckboxField,
  GroupField,
  SelectField,
  TextareaField,
  TextField,
  UploadField,
} from 'payload'

export const CTA_LAYOUTS = {
  CENTERED: 'centered',
  DEFAULT: 'default',
  IMAGE_BOTTOM: 'imageBottom',
  IMAGE_LEFT: 'imageLeft',
  IMAGE_RIGHT: 'imageRight',
  IMAGE_TOP: 'imageTop',
} as const

const CTAFields: (
  | CheckboxField
  | GroupField
  | SelectField
  | TextareaField
  | TextField
  | UploadField
)[] = [
  {
    admin: {
      description: 'Wählen Sie das Layout für diesen CTA-Bereich',
    },
    defaultValue: CTA_LAYOUTS.DEFAULT,
    name: 'layout',
    options: [
      {
        label: 'Standard',
        value: CTA_LAYOUTS.DEFAULT,
      },
      {
        label: 'Zentriert',
        value: CTA_LAYOUTS.CENTERED,
      },
      {
        label: 'Bild Links',
        value: CTA_LAYOUTS.IMAGE_LEFT,
      },
      {
        label: 'Bild Rechts',
        value: CTA_LAYOUTS.IMAGE_RIGHT,
      },
      {
        label: 'Bild Oben',
        value: CTA_LAYOUTS.IMAGE_TOP,
      },
      {
        label: 'Bild Unten',
        value: CTA_LAYOUTS.IMAGE_BOTTOM,
      },
    ],
    required: true,
    type: 'select',
  },
  {
    admin: {
      description:
        'Aktivieren Sie diese Option, um den CTA-Block in voller Breite anzuzeigen',
    },
    defaultValue: false,
    label: 'Volle Breite',
    name: 'fullwidth',
    type: 'checkbox',
  },
  {
    admin: {
      description: 'Die Hauptüberschrift des CTA-Blocks',
    },
    label: 'Überschrift',
    name: 'heading',
    required: true,
    type: 'text',
  },
  {
    admin: {
      description: 'Der beschreibende Text des CTA-Blocks',
    },
    label: 'Text',
    name: 'text',
    type: 'textarea',
  },
  {
    admin: {
      description: 'Einstellungen für den primären Button',
      style: {
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        marginBottom: '1rem',
        padding: '1rem',
      },
    },
    fields: [
      {
        admin: {
          description: 'Der Text des primären Buttons',
        },
        label: 'Button Text',
        name: 'text',
        required: true,
        type: 'text',
      },
      {
        admin: {
          description: 'Der Link des primären Buttons',
        },
        label: 'Link',
        name: 'link',
        required: true,
        type: 'text',
      },
      {
        admin: {
          description: 'Der Stil des primären Buttons',
        },
        defaultValue: 'default',
        label: 'Variant',
        name: 'variant',
        options: [
          { label: 'Standard', value: 'default' },
          { label: 'Destruktiv', value: 'destructive' },
          { label: 'Outline', value: 'outline' },
          { label: 'Sekundär', value: 'secondary' },
          { label: 'Geist', value: 'ghost' },
          { label: 'Link', value: 'link' },
        ],
        type: 'select',
      },
    ],
    label: 'Primärer Button',
    name: 'primaryButton',
    type: 'group',
  },
  {
    admin: {
      description: 'Einstellungen für den sekundären Button',
      style: {
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        marginBottom: '1rem',
        padding: '1rem',
      },
    },
    fields: [
      {
        admin: {
          description: 'Der Text des sekundären Buttons',
        },
        label: 'Button Text',
        name: 'text',
        required: true,
        type: 'text',
      },
      {
        admin: {
          description: 'Der Link des sekundären Buttons',
        },
        label: 'Link',
        name: 'link',
        required: true,
        type: 'text',
      },
      {
        admin: {
          description: 'Der Stil des sekundären Buttons',
        },
        defaultValue: 'secondary',
        label: 'Variant',
        name: 'variant',
        options: [
          { label: 'Standard', value: 'default' },
          { label: 'Destruktiv', value: 'destructive' },
          { label: 'Outline', value: 'outline' },
          { label: 'Sekundär', value: 'secondary' },
          { label: 'Geist', value: 'ghost' },
          { label: 'Link', value: 'link' },
        ],
        type: 'select',
      },
    ],
    label: 'Sekundärer Button',
    name: 'secondaryButton',
    type: 'group',
  },
  {
    fields: [
      {
        admin: {
          description: 'Das Bild für den CTA-Block',
        },
        label: 'Datei',
        name: 'file',
        relationTo: 'media',
        required: true,
        type: 'upload',
      },
      {
        admin: {
          description: 'Positionierung des Bildes im Block',
        },
        defaultValue: 'left',
        label: 'Positionierung',
        name: 'position',
        options: [
          {
            label: 'Links',
            value: 'left',
          },
          {
            label: 'Rechts',
            value: 'right',
          },
          {
            label: 'Oben',
            value: 'top',
          },
          {
            label: 'Unten',
            value: 'bottom',
          },
          {
            label: 'Zentriert',
            value: 'centered',
          },
        ],
        type: 'select',
      },
      {
        admin: {
          description: 'Ausrichtung des Bildes innerhalb der Position',
        },
        defaultValue: 'offset',
        label: 'Ausrichtung',
        name: 'alignment',
        options: [
          {
            label: 'Versetzt',
            value: 'offset',
          },
          {
            label: 'Ganz mittig',
            value: 'center',
          },
        ],
        type: 'select',
      },
    ],
    label: 'Bild',
    name: 'image',
    type: 'group',
  },
]

export const CTA: Block = {
  fields: [
    {
      admin: {
        description: 'Ein optionales Hintergrundbild für den CTA-Block',
      },
      label: 'Hintergrundbild',
      name: 'backgroundImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      admin: {
        description: 'Einstellungen für das Hintergrundbild-Overlay',
      },
      fields: [
        {
          admin: {
            description: 'Die Overlay-Farbe im HEX-Format (z.B. #000000)',
          },
          label: 'Farbe',
          name: 'color',
          type: 'text',
        },
        {
          admin: {
            description: 'Die Deckkraft des Overlays in Prozent',
          },
          label: 'Deckkraft',
          max: 100,
          min: 0,
          name: 'opacity',
          type: 'number',
        },
      ],
      label: 'Overlay',
      name: 'overlay',
      type: 'group',
    },
    ...CTAFields,
  ],
  labels: {
    plural: 'Call to Actions',
    singular: 'Call to Action',
  },
  slug: 'cta',
}
