import { getPayload } from 'payload'

import { configurePayload } from '@local/payload/configurePayload'

import type { PageServerLoad } from './$types'

export const config = {
  runtime: 'node',
} as const

export const load = (async () => {
  const config = configurePayload()
  const payload = await getPayload({ config })
  const data = await payload.find({
    collection: 'pages',
    draft: true,
    limit: 1,
    where: { isHome: { equals: true } },
  })

  const [doc] = data.docs
  // Runtime type check for required properties
  if (typeof doc.id !== 'string' || typeof doc.title !== 'string') {
    throw new TypeError('Startseite nicht gefunden')
  }

  return {
    id: doc.id,
    isHome: true,
    layout: doc.layout,
    title: doc.title,
  }
}) satisfies PageServerLoad
