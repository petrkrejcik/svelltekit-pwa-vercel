import getAuth from '$lib/firebase/getAuth';
import { inMemoryPersistence, setPersistence } from 'firebase/auth';

setPersistence(getAuth(), inMemoryPersistence);
