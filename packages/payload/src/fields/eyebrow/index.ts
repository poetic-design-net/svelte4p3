import type { TextField } from 'payload'
import { deepMerge } from 'payload'

export type EyebrowFieldOverrides = {
  eyebrowOverrides?: Partial<TextField>
}

type EyebrowField = (overrides?: EyebrowFieldOverrides) => [TextField]

export const eyebrowField: EyebrowField = (overrides = {}) => {
  const { eyebrowOverrides = {} } = overrides

  const eyebrowField = deepMerge<TextField, Partial<TextField>>(
    {
      label: 'Eyebrow',
      name: 'eyebrow',
      type: 'text',
    },
    eyebrowOverrides,
  )

  return [eyebrowField]
}
