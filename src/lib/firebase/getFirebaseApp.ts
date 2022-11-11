import { getApp, initializeApp, type FirebaseApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBfTjSCoH4xl6UFa31Eyj8h-Tf2ZxwPbmU',
	authDomain: 'que-comemos-hoy-5febf.firebaseapp.com',
	databaseURL: 'https://que-comemos-hoy-5febf.firebaseio.com',
	projectId: 'que-comemos-hoy-5febf',
	storageBucket: 'que-comemos-hoy-5febf.appspot.com',
	messagingSenderId: '545019553365',
	appId: '1:545019553365:web:333935cb9e69e47e4196dc'
};

let firebaseApp: FirebaseApp;

export default () => {
	if (firebaseApp) {
		return firebaseApp;
	}

	try {
		firebaseApp = getApp();
	} catch (e) {
		firebaseApp = initializeApp(firebaseConfig);
	}

	return firebaseApp;
};

// if (import.meta.env.DEV) {
// import { connectAuthEmulator } from 'firebase/auth';
// import {  connectFirestoreEmulator } from 'firebase/firestore';
// 	if (!isAlreadyInitialized) {
// 		connectFirestoreEmulator(db, 'localhost', 8080);
// 		connectAuthEmulator(auth, 'http://localhost:9099');
// 	}
// }
// } else {
//   enableIndexedDbPersistence(db).catch((err) => {
//     if (err.code == 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });
// }
