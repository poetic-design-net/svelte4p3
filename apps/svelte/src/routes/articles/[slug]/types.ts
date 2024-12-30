import type { RichTextContent } from '$lib/components/blocks/types'

export type Article = {
  category: string
  content: RichTextContent
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
}

export type PageData = Article
