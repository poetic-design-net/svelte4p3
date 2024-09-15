import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from '@local/payload/hooks/FormatSlugHook'

type Overrides = {
  checkboxOverrides?: Partial<CheckboxField>
  slugOverrides?: Partial<TextField>
}

type Slug = (
  fieldToUse?: string,
  overrides?: Overrides,
) => [TextField, CheckboxField]

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { checkboxOverrides, slugOverrides } = overrides

  const checkBoxField: CheckboxField = {
    admin: {
      hidden: true,
      position: 'sidebar',
    },
    defaultValue: true,
    name: 'slugLock',
    type: 'checkbox',
    ...checkboxOverrides,
  }

  // @ts-expect-error Expect ts error here because of typescript mismatching Partial<TextField> with TextField
  const slugField: TextField = {
    index: true,
    label: 'Slug',
    name: 'slug',
    type: 'text',
    ...(slugOverrides ?? {}),
    admin: {
      position: 'sidebar',
      ...(slugOverrides?.admin ?? {}),
      components: {
        Field: {
          clientProps: {
            checkboxFieldPath: checkBoxField.name,
            fieldToUse,
          },
          path: '@local/payload/components/SlugField#SlugField',
        },
      },
    },
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
  }

  return [slugField, checkBoxField]
}
