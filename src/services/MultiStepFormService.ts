'use server';

import client from '@/lib/axios';

interface FormPayload {}

export async function postForm(payload: FormPayload) {
  const response = await client.post(`/user/add`, payload);
  return response.data;
}
