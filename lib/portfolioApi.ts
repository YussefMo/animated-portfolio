'use server';

import { db } from '@/firebase/admin';

/**
 * Firestore drops documents that are missing the field used in `orderBy`, which
 * made projects created outside the admin panel invisible. Sort in memory
 * instead and fall back to the document's create time.
 */
function toMillis(value: Project['createdAt'] | undefined): number {
  if (!value) return 0;

  if (typeof value === 'string') {
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  if (typeof value === 'object' && 'seconds' in value) {
    return Number(value.seconds) * 1000;
  }

  return 0;
}

/**
 * `getAllProjects` powers the showcase cards. The long-form `post` markdown is
 * stripped before the result is serialized to the client, so the home page only
 * pays for a boolean `hasPost` flag. Use `getProjectById` for the full document.
 */
export async function getAllProjects(): Promise<Project[] | null> {
  try {
    const snapshot = await db.collection('projects').get();

    const projects = snapshot.docs.map((doc) => {
      const { post, ...rest } = doc.data() as Partial<Project>;

      return {
        id: doc.id,
        ...rest,
        createdAt: rest.createdAt ?? doc.createTime.toDate().toISOString(),
        hasPost: Boolean(post && post.trim().length > 0)
      } as Project;
    });

    return projects.sort((a, b) => toMillis(a.createdAt) - toMillis(b.createdAt));
  } catch (error: unknown) {
    console.error('Error fetching projects:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch projects: ${message}`);
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (!id) return null;

  try {
    const doc = await db.collection('projects').doc(id).get();
    if (!doc.exists) return null;

    return {
      id: doc.id,
      ...doc.data()
    } as Project;
  } catch (error: unknown) {
    console.error('Error fetching project:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch project: ${message}`);
  }
}

export async function createContactReq(data: ContactFormProps) {
  let { name, email, phoneNumber, message } = data;

  name = String(name ?? '');
  email = String(email ?? '');
  phoneNumber = String(phoneNumber ?? '');
  message = String(message ?? '');

  if (!name || !email || !phoneNumber || !message) {
    throw new Error('All fields are required');
  }
  if (message.length < 10) {
    throw new Error('Message must be at least 10 characters long');
  }

  const payload = {
    name,
    email,
    phoneNumber,
    message,
    createdAt: new Date()
  };

  try {
    const docRef = await db.collection('messages').add(payload);
    return { id: docRef.id, ...payload };
  } catch (error: unknown) {
    console.error('Error creating contact request:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to submit contact request: ${message}`);
  }
}
