import { initializeApp, credential } from "firebase-admin";

import * as serviceAccount from './serviceAccount.json';

initializeApp({
  credential: credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
  }),
  databaseURL: 'https://que-comemos-hoy-5febf.firebaseio.com',
});

// const getUser = async (uid: string) => {
//   const user = await auth().getUser(uid);
//   console.log('🛎 ', 'user', user);
// };

// const setUserClaims = async (uid: string, claims: Record<string, string>) => {
//   try {
//     await admin.auth().setCustomUserClaims(uid, claims);
//     console.log('🛎 ', '✅ User claims set');
//   } catch (e) {
//     console.log('🛎 ', '❌ Error setting user claims', e);
//   }
// };

// const petrUid = 'zBvIhyMDwtWQ65Y98CXGYXYnQaq2';
// const elenaUid = 'L8hBOOjzcSPcZrn2sg3wIgqueOh2';
// getUser(elenaUid);
// setUserClaims(elenaUid, { groupId: 'mojeI6fi9GdeWywMEn9Yr' });
