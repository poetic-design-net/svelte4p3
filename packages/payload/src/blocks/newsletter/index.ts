import type { Block } from 'payload'

export type NewsletterBlock = {
  buttonText: string
  description: string
  features: {
    description: string
    icon: 'calendar' | 'hand'
    title: string
  }[]
  heading: string
  placeholderText: string
}

export const Newsletter: Block = {
  fields: [
    {
      admin: {
        description: 'The main heading for the newsletter section',
      },
      defaultValue: 'Newsletter abonnieren',
      name: 'heading',
      required: true,
      type: 'text',
    },
    {
      admin: {
        description: 'A brief description of what subscribers will receive',
      },
      defaultValue:
        'Bleiben Sie auf dem Laufenden mit unseren wöchentlichen Updates und exklusiven Inhalten.',
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      defaultValue: [
        {
          description:
            'Erhalten Sie regelmäßig spannende Einblicke und aktuelle Informationen.',
          icon: 'calendar',
          title: 'Wöchentliche Artikel',
        },
        {
          description:
            'Wir respektieren Ihre Zeit und senden nur relevante Inhalte.',
          icon: 'hand',
          title: 'Kein Spam',
        },
      ],
      fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          name: 'description',
          required: true,
          type: 'textarea',
        },
        {
          name: 'icon',
          options: [
            {
              label: 'Calendar',
              value: 'calendar',
            },
            {
              label: 'Hand',
              value: 'hand',
            },
          ],
          required: true,
          type: 'select',
        },
      ],
      maxRows: 2,
      minRows: 1,
      name: 'features',
      required: false,
      type: 'array',
    },
    {
      admin: {
        description: 'Text for the subscribe button',
      },
      defaultValue: 'Abonnieren',
      name: 'buttonText',
      required: true,
      type: 'text',
    },
    {
      admin: {
        description: 'Placeholder text for the email input',
      },
      defaultValue: 'E-Mail-Adresse eingeben',
      name: 'placeholderText',
      required: true,
      type: 'text',
    },
  ],
  labels: {
    plural: 'Newsletter Blocks',
    singular: 'Newsletter Block',
  },
  slug: 'newsletter',
}
