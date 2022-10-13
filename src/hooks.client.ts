import { auth } from '$lib/firebase/firebase';
import { inMemoryPersistence, setPersistence } from 'firebase/auth';

setPersistence(auth, inMemoryPersistence);
