'use server';

import { db } from '@/firebase/admin';
import { seedProjects } from './data';

export async function pushSeedProjects() {
  try {
    const collection = db.collection('projects');
    for (const data of seedProjects) {
      await collection.doc().set(data);
    }
    return { success: true, message: `Seeded ${seedProjects.length} project(s)` };
  } catch (error) {
    console.error('Error pushing projects:', error);
    return { success: false, message: 'Failed to push projects' };
  }
}
