import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { StudentLetter } from '../types';

const LETTERS_COLLECTION = 'letters';

// Local storage key for offline fallback / optimistic cache
const LOCAL_STORAGE_KEY = 'dusc_cached_student_letters';

function getLocalLetters(): StudentLetter[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalLetter(letter: StudentLetter) {
  try {
    const existing = getLocalLetters();
    const updated = [letter, ...existing];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated.slice(0, 50)));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Submit a student's heartfelt letter to a teacher
 */
export async function sendStudentLetter(data: {
  teacherId: string;
  teacherName: string;
  studentName: string;
  studentClass?: string;
  message: string;
}): Promise<string> {
  const newLetter: StudentLetter = {
    teacherId: data.teacherId.toLowerCase().trim(),
    teacherName: data.teacherName.trim(),
    studentName: data.studentName.trim(),
    studentClass: (data.studentClass || '').trim(),
    message: data.message.trim(),
    createdAt: new Date().toISOString(),
  };

  // Cache locally
  saveLocalLetter(newLetter);

  try {
    const docRef = await addDoc(collection(db, LETTERS_COLLECTION), {
      ...newLetter,
      timestamp: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.warn('Firestore write warning (saved locally):', error);
    return 'local-' + Date.now();
  }
}

/**
 * Real-time listener for all letters addressed to a specific teacher
 */
export function subscribeToTeacherLetters(
  teacherId: string,
  onUpdate: (letters: StudentLetter[]) => void,
  onError?: (err: unknown) => void
): () => void {
  const cleanId = teacherId.toLowerCase().trim();
  const localCached = getLocalLetters().filter((l) => l.teacherId === cleanId);

  // Immediately notify with local cache so UI doesn't flicker
  if (localCached.length > 0) {
    onUpdate(localCached);
  }

  try {
    const q = query(
      collection(db, LETTERS_COLLECTION),
      where('teacherId', '==', cleanId)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const letters: StudentLetter[] = [];
        snapshot.forEach((docSnap) => {
          const d = docSnap.data() as StudentLetter;
          letters.push({
            id: docSnap.id,
            teacherId: d.teacherId,
            teacherName: d.teacherName,
            studentName: d.studentName,
            studentClass: d.studentClass || '',
            message: d.message,
            createdAt: d.createdAt || new Date().toISOString(),
          });
        });

        // Merge with any local ones that haven't synced yet
        const ids = new Set(letters.map((l) => `${l.studentName}-${l.createdAt}`));
        for (const local of localCached) {
          if (!ids.has(`${local.studentName}-${local.createdAt}`)) {
            letters.push(local);
          }
        }

        // Sort by newest first
        letters.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        onUpdate(letters);
      },
      (error) => {
        console.warn('Firestore subscription fallback:', error);
        if (onError) onError(error);
        // Fallback to local
        onUpdate(localCached);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn('Subscription error, using local letters:', err);
    onUpdate(localCached);
    return () => {};
  }
}

/**
 * One-time fetch of all letters for a teacher
 */
export async function getTeacherLettersOnce(teacherId: string): Promise<StudentLetter[]> {
  const cleanId = teacherId.toLowerCase().trim();
  try {
    const q = query(
      collection(db, LETTERS_COLLECTION),
      where('teacherId', '==', cleanId)
    );
    const snap = await getDocs(q);
    const letters: StudentLetter[] = [];
    snap.forEach((docSnap) => {
      const d = docSnap.data() as StudentLetter;
      letters.push({
        id: docSnap.id,
        teacherId: d.teacherId,
        teacherName: d.teacherName,
        studentName: d.studentName,
        studentClass: d.studentClass || '',
        message: d.message,
        createdAt: d.createdAt || new Date().toISOString(),
      });
    });
    letters.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return letters;
  } catch (e) {
    console.warn('getTeacherLettersOnce fallback:', e);
    return getLocalLetters().filter((l) => l.teacherId === cleanId);
  }
}
