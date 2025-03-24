'use client';

import axios from 'axios';
import { redirect } from 'next/navigation';

const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiService.interceptors.response.use(async (response) => {
  if (response.data.code === 401) {
    const expectedErrorMsg = 'Invalid token';
    if (
      response.data.error.toLocaleLowerCase() ===
      expectedErrorMsg.toLocaleLowerCase()
    ) {
      redirect('/login?status=401');
    }
  }

  return response;
});

export default apiService;
