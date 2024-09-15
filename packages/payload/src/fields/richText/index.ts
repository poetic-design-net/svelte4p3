import type { FeatureProviderServer } from '@payloadcms/richtext-lexical'
import type { RichTextField } from 'payload'
import {
  HTMLConverterFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { deepMerge } from 'payload'

type RichText = (
  overrides?: Partial<RichTextField>,
  additions?: {
    features?: FeatureProviderServer[]
  },
) => RichTextField

export const richTextField: RichText = (
  overrides,
  additions = { features: [] },
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
          ...(additions.features ?? []),
        ],
      }),
      name: 'richText',
      type: 'richText',
    },
    overrides ?? {},
  )
