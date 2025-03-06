export async function login() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.NEXT_PUBLIC_API_USERNAME,
        password: process.env.NEXT_PUBLIC_API_PASSWORD,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }
  
    const data = await response.json();
    return data.access_token;
  }