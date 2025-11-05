import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";


if (!getApps().length) {
    const serviceAccountJson = process.env.PRIVATE_KEY;
    console.log(process.env.PRIVATE_KEY)
    const serviceAccountConfig = serviceAccountJson ? JSON.parse(serviceAccountJson) : null;
  initializeApp({
    credential: cert(serviceAccountConfig),
    databaseURL: process.env.DATABASE_URL
  });
}

export const adminDb = getDatabase();
