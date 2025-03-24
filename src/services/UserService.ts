'use client';

import apiService from '@/lib/axios';
import { UserResponse } from '@/types/services/response/user';

interface FormPayload {}

export async function getUsers() {
  const response = await apiService.get<UserResponse>(`/users`);
  return response.data;
}

export async function postUser(payload: FormPayload) {
  const response = await apiService.post(`/user/add`, payload);
  return response.data;
}
