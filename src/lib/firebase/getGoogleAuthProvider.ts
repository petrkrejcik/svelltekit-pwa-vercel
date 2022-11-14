import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default () => {
	return getAuth(getApp());
};
