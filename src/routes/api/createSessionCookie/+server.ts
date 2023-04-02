import { getFirebaseAdmin } from '$lib/firebase/getFirebaseAdmin.server';
import {getAuth} from 'firebase-admin/auth'
 
export const GET = (async ({ url }) => {
  console.log('🛎 ', 'running server endpoint', url.href);

  const admin = getFirebaseAdmin()
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  try {
    await getAuth(admin).createSessionCookie('aa', { expiresIn });
    console.log('🛎 ', 'cookie created');
  } catch (e) {
    console.log('🛎 ', 'failed to create a cookie');
  }
 
  return new Response(String('EP finished'));
}) ;