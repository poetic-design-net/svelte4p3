import { fail, redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

type LoginResponse = {
  token: string
  user: {
    email: string
    id: string
  }
}

export const actions: Actions = {
  default: async ({ cookies, fetch, request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    if (!email || !password) {
      return fail(400, {
        error: 'Bitte füllen Sie alle Felder aus',
      })
    }

    try {
      const response = await fetch('/api/users/login', {
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        const error = (await response.json()) as { message?: string }
        return fail(response.status, {
          error: error.message ?? 'Anmeldung fehlgeschlagen',
        })
      }

      const { token } = (await response.json()) as LoginResponse

      // Set the token in a cookie
      cookies.set('payload-token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })

      return redirect(303, '/')
    } catch (error) {
      if (error instanceof Error && error.name !== 'RedirectError') {
        return fail(500, {
          error: error.message || 'Ein unerwarteter Fehler ist aufgetreten',
        })
      }
      throw error
    }
  },
}
