import type {
  CheckboxField,
  GroupField,
  RadioField,
  RelationshipField,
  TextField,
} from 'payload'
import { deepMerge } from 'payload'

export type LinkFieldOverrides = {
  internalLinkOverrides?: RelationshipField
  labelOverrides?: TextField
  linkTypeOverrides?: RadioField
  openInNewTabOverrides?: CheckboxField
  urlOverrides?: TextField
}

type LinkField = (overrides?: LinkFieldOverrides) => GroupField

export const linkField: LinkField = (overrides = {}) => {
  const {
    internalLinkOverrides = {},
    labelOverrides = {},
    linkTypeOverrides = {},
    openInNewTabOverrides = {},
    urlOverrides = {},
  } = overrides

  return {
    fields: [
      deepMerge<TextField, Partial<TextField>>(
        {
          label: 'Label',
          name: 'label',
          required: true,
          type: 'text',
        },
        labelOverrides,
      ),
      deepMerge<RadioField, Partial<RadioField>>(
        {
          label: 'Type',
          name: 'linkType',
          options: [
            {
              label: 'Internal',
              value: 'internal',
            },
            {
              label: 'External',
              value: 'external',
            },
          ],
          required: true,
          type: 'radio',
        },
        linkTypeOverrides,
      ),
      deepMerge<TextField, Partial<TextField>>(
        {
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'external',
          },
          label: 'URL',
          name: 'url',
          required: true,
          type: 'text',
        },
        urlOverrides,
      ),
      deepMerge<RelationshipField, Partial<RelationshipField>>(
        {
          admin: {
            condition: (_, siblingData) => siblingData.linkType === 'internal',
          },
          label: 'Internal Reference',
          name: 'internalLink',
          relationTo: ['pages', 'articles'],
          type: 'relationship',
        },
        internalLinkOverrides,
      ),
      deepMerge<CheckboxField, Partial<CheckboxField>>(
        {
          label: 'Open in new tab',
          name: 'openInNewTab',
          type: 'checkbox',
        },
        openInNewTabOverrides,
      ),
    ],
    label: 'Link',
    name: 'link',
    type: 'group',
  }
}
