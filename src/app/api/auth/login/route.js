import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

// Helper function to verify password
function verifyPassword(inputPassword, storedPassword) {
  return inputPassword === storedPassword;
}

// Helper function to create a session token
function createSessionToken() {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Get credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check if admin password is configured
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set!');
      return NextResponse.json(
        { error: 'Server configuration error', success: false },
        { status: 500 }
      );
    }

    // Verify credentials
    if (username !== adminUsername || !verifyPassword(password, adminPassword)) {
      return NextResponse.json(
        { error: 'Invalid username or password', success: false },
        { status: 401 }
      );
    }

    // Create session token
    const sessionToken = createSessionToken();
    const sessionData = {
      username: adminUsername,
      token: sessionToken,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    };

    // Set cookie with session data
    const cookieStore = await cookies();
    cookieStore.set('admin_session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login', success: false },
      { status: 500 }
    );
  }
}

