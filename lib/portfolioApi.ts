'use server';

import { db } from '@/firebase/admin';
export async function getAllProjects(): Promise<Project[] | null> {
  try {
    const products = await db
      .collection('projects')
      .orderBy('createdAt', 'asc')
      .get();
    return products.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
  } catch (error: unknown) {
    console.error('Error fetching projects:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch projects: ${message}`);
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
