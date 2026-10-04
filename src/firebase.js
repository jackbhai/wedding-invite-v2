import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { DEFAULT_FIREBASE_CONFIG } from './firebase.config.js'

let db = null
try {
  const app = getApps().length ? getApps()[0] : initializeApp(DEFAULT_FIREBASE_CONFIG)
  db = getFirestore(app)
} catch (e) {
  db = null
}

// Real RSVP — saved to Firestore (collection: rsvps_v2)
export async function saveRSVP(data) {
  if (!db) throw new Error('RSVP service unavailable right now.')
  await addDoc(collection(db, 'rsvps_v2'), {
    ...data,
    createdAt: serverTimestamp(),
    source: 'wedding-invite-v2',
  })
}
