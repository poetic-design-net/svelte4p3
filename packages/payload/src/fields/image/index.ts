import type { UploadField } from 'payload'
import { deepMerge } from 'payload'

import type { MediaFieldOverrides } from '@local/payload/fields/media'
import { mediaField } from '@local/payload/fields/media'

export type ImageFieldOverrides = {
  imageOverrides?: {
    supportedFormats?: string[]
  }
} & MediaFieldOverrides

type ImageField = (overrides?: ImageFieldOverrides) => [UploadField]

export const imageField: ImageField = (overrides = {}) => {
  const { imageOverrides = {}, mediaOverrides = {}, ...rest } = overrides
  const {
    supportedFormats = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
    ],
  } = imageOverrides

  const imageField = mediaField({
    ...rest,
    mediaOverrides: deepMerge(mediaOverrides, {
      filterOptions: {
        or: supportedFormats.map(fmt => ({
          mimeType: {
            contains: fmt,
          },
        })),
      },
      label: 'Image',
      name: 'image',
    }),
  })

  return [...imageField]
}
