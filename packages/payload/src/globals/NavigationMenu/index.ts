import type { GlobalConfig } from 'payload'

import { AdminAccess } from '@local/payload/access/AdminAccess'
import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'

export const NavigationMenu: GlobalConfig = {
  access: {
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    description: 'Konfigurieren Sie die Hauptnavigation der Website',
    group: 'Site Config',
  },
  fields: [
    {
      admin: {
        description: 'Navigationselemente',
      },
      fields: [
        {
          admin: {
            description: 'Der Text, der im Menü angezeigt wird',
          },
          name: 'label',
          required: true,
          type: 'text',
        },
        {
          admin: {
            description: 'Der Link-Pfad (z.B. /produkte)',
          },
          name: 'link',
          required: true,
          type: 'text',
        },
        {
          admin: {
            description: 'Optional: Megamenü-Einstellungen',
          },
          fields: [
            {
              admin: {
                description:
                  'Aktivieren Sie das Megamenü für diesen Navigationspunkt',
              },
              defaultValue: false,
              name: 'enabled',
              type: 'checkbox',
            },
            {
              admin: {
                description: 'Spalten im Megamenü',
              },
              fields: [
                {
                  admin: {
                    description: 'Spaltenüberschrift',
                  },
                  name: 'title',
                  required: true,
                  type: 'text',
                },
                {
                  fields: [
                    {
                      name: 'label',
                      required: true,
                      type: 'text',
                    },
                    {
                      name: 'link',
                      required: true,
                      type: 'text',
                    },
                    {
                      admin: {
                        description: 'Optionale Beschreibung',
                      },
                      name: 'description',
                      type: 'textarea',
                    },
                  ],
                  name: 'items',
                  type: 'array',
                },
              ],
              name: 'columns',
              type: 'array',
            },
          ],
          name: 'megamenu',
          type: 'group',
        },
      ],
      name: 'items',
      required: true,
      type: 'array',
    },
  ],
  slug: 'navigation-menu',
}
