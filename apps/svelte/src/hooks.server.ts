import type { Handle } from '@sveltejs/kit'

// eslint-disable-next-line @typescript-eslint/unbound-method
export const handle: Handle = async ({ event, resolve }) => {
  const session = event.cookies.get('payload-token')

  // Redirect to login if trying to access protected routes without session
  if (!session && event.url.pathname.startsWith('/protected')) {
    return new Response('Redirecting to login...', {
      headers: { Location: '/login' },
      status: 302,
    })
  }

  const response = await resolve(event)
  return response
}
