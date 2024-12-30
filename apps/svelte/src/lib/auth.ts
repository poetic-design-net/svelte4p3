type LoginResponse = {
  token: string
  user: {
    email: string
    id: string
  }
}

export const loginUser = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await fetch('/api/users/login', {
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error('Login fehlgeschlagen')
    }

    return (await response.json()) as LoginResponse
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Login fehlgeschlagen',
    )
  }
}
