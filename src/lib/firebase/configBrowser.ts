import type { FirebaseOptions } from 'firebase/app';

const config: FirebaseOptions = {
	apiKey: 'AIzaSyCEwSJGGVl4BtKPLC-0geZljFYgd4VfOb4',
	authDomain: 'testing-368621.firebaseapp.com',
	projectId: 'testing-368621',
	storageBucket: 'testing-368621.appspot.com',
	messagingSenderId: '978445631854',
	appId: '1:978445631854:web:965cbbdd5e6e3d5084c17f'
};

export default config;

// let emulatorsInitialised = false
// if (import.meta.env.DEV) {
// 	if (!firebaseApp && !emulatorsInitialised) {
// 		console.log('🛎 ', 'emul client');
// 		connectFirestoreEmulator(getFirestore(), 'localhost', 8080);
// 		emulatorsInitialised = true
// 		// connectAuthEmulator(auth, 'http://localhost:9099');
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
