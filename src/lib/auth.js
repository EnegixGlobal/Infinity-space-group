import { cookies } from 'next/headers';

/**
 * Check if the user is authenticated
 * This is a server-side function to verify authentication
 */
export async function isAuthenticated() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');

    if (!sessionCookie) {
      return false;
    }

    let sessionData;
    try {
      sessionData = JSON.parse(sessionCookie.value);
    } catch (e) {
      return false;
    }

    // Check if session is expired
    if (sessionData.expiresAt && Date.now() > sessionData.expiresAt) {
      cookieStore.delete('admin_session');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Auth check error:', error);
    return false;
  }
}

