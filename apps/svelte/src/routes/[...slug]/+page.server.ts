import { error } from '@sveltejs/kit'
import { getPayload } from 'payload'

import { configurePayload } from '@local/payload/configurePayload'

import type { PageServerLoad } from './$types'

/** @type {import('some-adapter').Config} */
export const config = {
  runtime: 'node',
}

export const load: PageServerLoad = async ({ params }) => {
  const config = configurePayload()
  const payload = await getPayload({ config })
  const data = await payload.find({
    collection: 'pages',
    draft: true,
    limit: 1,
    where: { pathname: { equals: `/${params.slug}` } },
  })

  const [doc] = data.docs
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (doc) {
    return doc
  }

  error(404, 'Not found')
}
