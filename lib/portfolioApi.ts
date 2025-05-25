'use server';

import { db } from '@/firebase/admin';
export async function getAllProjects(): Promise<Project[] | null> {
  const products = await db
    .collection('projects')
    .orderBy('createdAt', 'asc')
    .get();

  // @ts-ignore
  return products.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
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
  } catch (error: any) {
    console.error('Error creating contact request:', error);
    throw new Error(`Failed to submit contact request: ${error.message}`);
  }
}
