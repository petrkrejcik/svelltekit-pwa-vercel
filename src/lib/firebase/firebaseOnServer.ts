import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY_NON_RESTRICTED as string,
	authDomain: 'que-comemos-hoy-5febf.firebaseapp.com',
	databaseURL: 'https://que-comemos-hoy-5febf.firebaseio.com',
	projectId: 'que-comemos-hoy-5febf',
	storageBucket: 'que-comemos-hoy-5febf.appspot.com',
	messagingSenderId: '545019553365',
	appId: '1:545019553365:web:333935cb9e69e47e4196dc'
};

let firebaseApp;
let isAlreadyInitialized = false;
try {
	firebaseApp = getApp();
	isAlreadyInitialized = true;
} catch (error) {
	firebaseApp = initializeApp(firebaseConfig);
}

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// if (import.meta.env.DEV) {
// import { connectAuthEmulator } from 'firebase/auth';
// import {  connectFirestoreEmulator } from 'firebase/firestore';
// 	if (!isAlreadyInitialized) {
// 		connectFirestoreEmulator(db, 'localhost', 8080);
// 		connectAuthEmulator(auth, 'http://localhost:9099');
// 	}
// }
// }
