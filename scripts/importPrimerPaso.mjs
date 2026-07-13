import { readFile } from 'node:fs/promises';
import admin from 'firebase-admin';

const serviceAccountPath = process.argv[2] || './serviceAccountKey.json';
const jsonPath = process.argv[3] || './data/primer-paso-v1.json';

const serviceAccount = JSON.parse(await readFile(serviceAccountPath, 'utf8'));
const program = JSON.parse(await readFile(jsonPath, 'utf8'));

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

if (!program.id || !Array.isArray(program.weeks)) {
  throw new Error('JSON invalido: falta id o weeks.');
}

const { weeks, ...programData } = program;
const programRef = db.collection('programs').doc(program.id);
const batch = db.batch();

batch.set(programRef, {
  ...programData,
  isActive: true,
  importedAt: admin.firestore.FieldValue.serverTimestamp(),
  updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  createdAt: admin.firestore.FieldValue.serverTimestamp()
}, { merge: true });

for (const week of weeks) {
  const { sessions = [], ...weekData } = week;
  batch.set(programRef.collection('weeks').doc(`week-${String(week.week).padStart(2, '0')}`), weekData, { merge: true });
  for (const session of sessions) {
    batch.set(programRef.collection('sessions').doc(session.id), session, { merge: true });
  }
}

await batch.commit();
console.log(`Importado ${program.name} (${program.totalSessions} sesiones) a Firestore.`);
