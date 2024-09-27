import { error } from '@sveltejs/kit'
import { getPayload } from 'payload'

import { configurePayload } from '@local/payload/configurePayload'

export const prerender = 'auto'
export const ssr = true
export const csr = false

/** @type {import('some-adapter').Config} */
export const config = {
  runtime: 'node',
}

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
  const config = configurePayload()
  const payload = await getPayload({ config })
  const data = await payload.find({
    collection: 'pages',
    draft: true,
    limit: 1,
    where: { pathname: { equals: `/${params.slug ?? ''}` } },
  })

  const [doc] = data.docs
  if (!doc) {
    error(404, 'Not found')
    return
  }

  return doc
}
