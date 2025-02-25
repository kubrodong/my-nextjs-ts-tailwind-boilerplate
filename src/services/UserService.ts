'use server';

import client from '@/lib/axios';
import { UserResponse } from '@/types/api-response';

interface FormPayload {}

export async function getUsers() {
  const response = await client.get<UserResponse>(`/users`);
  return response.data;
}

export async function postUser(payload: FormPayload) {
  const response = await client.post(`/user/add`, payload);
  return response.data;
}
