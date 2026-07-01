import { App, cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

/**
 * Initialize and return the Firebase Admin App singleton.
 * This pattern works correctly in serverless environments (Vercel, AWS Lambda, etc.)
 * where modules may be cached across invocations.
 */
function getAdminApp(): App {
  // If apps already exist, return the default one
  if (getApps().length > 0) {
    return getApp();
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    console.error('Firebase Admin SDK environment variables missing!');
    throw new Error(
      'Missing Firebase Admin SDK configuration in environment variables. ' +
        'Ensure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY are set.'
    );
  }

  try {
    const app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n')
      })
    });

    // Configure Firestore to ignore undefined properties
    getFirestore(app).settings({ ignoreUndefinedProperties: true });

    console.log('Firebase Admin SDK initialized successfully');
    return app;
  } catch (initError) {
    console.error('Error initializing Firebase Admin SDK:', initError);
    throw initError;
  }
}

/**
 * Get Firebase Admin services (Auth and Firestore).
 * Uses lazy initialization to ensure env vars are available.
 */
function getFirebaseAdminServices() {
  const app = getAdminApp();

  try {
    const authInstance = getAuth(app);
    const dbInstance = getFirestore(app);
    return {
      auth: authInstance,
      db: dbInstance
    };
  } catch (error) {
    console.error('Error getting Auth/Firestore instances:', error);
    throw error;
  }
}

// Export services using lazy getters to avoid initialization at module load time
// This ensures env vars are available when the services are first used
let _auth: ReturnType<typeof getAuth> | null = null;
let _db: ReturnType<typeof getFirestore> | null = null;

function getServices() {
  if (!_auth || !_db) {
    const services = getFirebaseAdminServices();
    _auth = services.auth;
    _db = services.db;
  }
  return { auth: _auth, db: _db };
}

export const auth = new Proxy({} as ReturnType<typeof getAuth>, {
  get(target, prop) {
    return getServices().auth[prop as keyof ReturnType<typeof getAuth>];
  }
});

export const db = new Proxy({} as ReturnType<typeof getFirestore>, {
  get(target, prop) {
    return getServices().db[prop as keyof ReturnType<typeof getFirestore>];
  }
});
