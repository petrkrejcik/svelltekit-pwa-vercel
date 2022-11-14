import type { FirebaseOptions } from 'firebase/app';

const config: FirebaseOptions = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY_NON_RESTRICTED as string,
	authDomain: 'testing-368621.firebaseapp.com',
	projectId: 'testing-368621',
	storageBucket: 'testing-368621.appspot.com',
	messagingSenderId: '978445631854',
	appId: '1:978445631854:web:965cbbdd5e6e3d5084c17f'
};

export default config;
