import firebaseAdmin from 'firebase-admin';

export const getFirebaseAdmin = () => {
	try {
		return firebaseAdmin.app('admin');
	} catch (e) {
		const serviceAccount = JSON.parse(import.meta.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY as string);

		return firebaseAdmin.initializeApp(
			{
				credential: firebaseAdmin.credential.cert({
					projectId: serviceAccount.project_id,
					clientEmail: serviceAccount.client_email,
					privateKey: serviceAccount.private_key
				}),
				databaseURL: 'https://que-comemos-hoy-5febf.firebaseio.com'
			},
			'admin'
		);
	}
};
