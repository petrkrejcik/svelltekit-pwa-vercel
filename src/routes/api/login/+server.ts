import { redirect, type RequestHandler } from '@sveltejs/kit';
import { auth } from 'firebase-admin';
import '../../../../server/index.ts';
import { isLogged } from '../../../../server/isLogged';

export const POST: RequestHandler = async function POST(event) {
  
  const session = event.cookies.get('session')
  if (session) {
    try {
      await isLogged(session)
      console.log('🛎 ', 'ok');
    } catch (e) {
      console.log('🛎 ', 'session not allowed');
      throw redirect(302, '/login');
    }
  } else {
    const { token } = await event.request.json();
    console.log('🛎 ', 'token', token);
  
    // Set session expiration to 5 days.
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
  
    const sessionCookie = await auth().createSessionCookie(token, { expiresIn });
  
    // console.log('🛎 ', 'sessionCookie', sessionCookie);
  
    event.cookies.set('session', sessionCookie, {
      path: '/'
    });
  }


	return new Response()
}
