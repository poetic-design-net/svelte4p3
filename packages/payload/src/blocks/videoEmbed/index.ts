import type { Block } from 'payload'

export const VideoEmbed: Block = {
  fields: [
    {
      label: 'Video Typ',
      name: 'videoType',
      options: [
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Vimeo',
          value: 'vimeo',
        },
        {
          label: 'Hochgeladen',
          value: 'upload',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      admin: {
        condition: data => data.videoType !== 'upload',
      },
      label: 'Video ID',
      name: 'videoId',
      required: true,
      type: 'text',
    },
    {
      admin: {
        condition: data => data.videoType === 'upload',
      },
      label: 'Video Datei',
      name: 'videoFile',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  labels: {
    plural: 'Video Embeds',
    singular: 'Video Embed',
  },
  slug: 'videoEmbed',
}
