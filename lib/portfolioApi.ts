'use server';

import { ContactFormProps, ProjectsResponse } from '@/types';
import axios from 'axios';

const baseUrl =
  process.env.NEXT_API_BASE_URL

// Log the base URL for debugging
console.log('API Base URL:', baseUrl);

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getAllProjects(): Promise<ProjectsResponse> {
  try {
    const res = await api.get('/api/v1/projects', {
      headers: { 'Cache-Control': 'no-store' }
    });
    return res.data;
  } catch (error: any) {
    console.error(
      'Failed to fetch projects:',
      error?.response?.data || error.message
    );
    throw new Error('Failed to fetch projects');
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

  const payload = { name, email, phoneNumber, message };

  const res = await fetch(`${baseUrl}/api/v1/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const responseText = await res.text();
  if (!res.ok) {
    throw new Error(
      `Failed to submit contact request: ${res.status} ${res.statusText} | ${responseText}`
    );
  }
  try {
    return JSON.parse(responseText);
  } catch (e: any) {
    throw new Error('Invalid response from server', e);
  }
}
