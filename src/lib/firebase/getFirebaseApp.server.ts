import { getApp, initializeApp, type FirebaseApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY_NON_RESTRICTED as string,
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
