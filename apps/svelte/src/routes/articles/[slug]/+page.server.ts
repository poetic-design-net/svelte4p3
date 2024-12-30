import type { RichTextNode } from '$lib/components/blocks/types'
import { getPayload } from 'payload'

import { configurePayload } from '@local/payload/configurePayload'

import type { PageServerLoad } from './$types'
import type { Article } from './types'

export const config = {
  runtime: 'node',
} as const

export const load = (async ({ params }) => {
  const config = configurePayload()
  const payload = await getPayload({ config })
  type PayloadResponse = {
    docs: {
      category: string
      content: {
        root: {
          children: RichTextNode[]
        }
      }
      createdAt: string
      featuredImage?: {
        url: string
      }
      id: string
      navigation?: {
        items: {
          text: string
          url: string
        }[]
      }
      readTime: string
      slug: null | string
      title: string
      updatedAt: string
    }[]
  }

  const data = await payload.find({
    collection: 'articles',
    depth: 3,
    draft: true,
    limit: 1,
    where: { slug: { equals: params.slug } },
  })

  const [doc] = data.docs as PayloadResponse['docs']

  // Cast the document to our Article type
  const article: Article = {
    category: doc.category,
    content: doc.content,
    createdAt: doc.createdAt,
    featuredImage: doc.featuredImage,
    id: doc.id,
    navigation: doc.navigation,
    readTime: doc.readTime,
    slug: doc.slug,
    title: doc.title,
    updatedAt: doc.updatedAt,
  }

  return {
    ...article,
    serverURL: 'http://localhost:3000', // Hardcode for now since we know the dev server URL
  }
}) satisfies PageServerLoad
