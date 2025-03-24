'use client';

import apiService from '@/lib/axios';
import { AuthResponse } from '@/types/services/response/auth';
import { AuthRequest } from '../types/services/request/auth';
import { setCookie } from 'cookies-next';

export async function postLogin(payload: AuthRequest) {
  return apiService
    .post<AuthResponse>(`/auth/login`, payload, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(async (response) => {
      const accessToken = response.data.accessToken;
      setCookie('accessToken', accessToken, {
        maxAge: payload.expiresInMins ?? 60 * 60,
      });
      const refreshToken = response.data.refreshToken;
      setCookie('refreshToken', refreshToken, {
        maxAge: payload.expiresInMins ?? 60 * 60,
      });
      return response.data;
    });
}
