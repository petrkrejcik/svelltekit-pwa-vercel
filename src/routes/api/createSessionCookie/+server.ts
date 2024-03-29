import { getFirebaseAdmin } from '$lib/firebase/getFirebaseAdmin.server';
import {getAuth} from 'firebase-admin/auth'
 
export const GET = (async ({ url }) => {
  console.log('🛎 ', 'running server endpoint', url.href);

  try {
    console.log('🛎 ', 'getting admin');
    const admin = getFirebaseAdmin()
    console.log('🛎 ', 'admin created');
    try {
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      await getAuth(admin).createSessionCookie('aa', { expiresIn });
      console.log('🛎 ', 'cookie created');
    } catch (e) {
      console.log('🛎 ', 'failed to create a cookie');
    }

  } catch (e) { 
    console.log('🛎 ', 'cannot create admin', e);
  }
 
  return new Response(String('EP finished'));
}) ;