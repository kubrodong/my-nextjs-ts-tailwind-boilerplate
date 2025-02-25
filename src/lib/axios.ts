'use server';
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  metadata?: {
    requestId: string;
    timestamp: string;
  };
}

const client = axios.create({
  baseURL: process.env.API_BASE_URL,
});

// Function to generate a unique request ID
const generateRequestId = () =>
  `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

const logRequest = (config: ExtendedAxiosRequestConfig) => {
  if (process.env.NODE_ENV !== 'production') {
    const requestId = generateRequestId();
    const timestamp = new Date().toISOString(); // Store timestamp in ISO format

    config.headers['X-Request-Id'] = requestId; // Attach request ID to headers
    config.metadata = { requestId, timestamp }; // Store metadata

    const fullUrl = `${config.baseURL ?? ''}${config.url ?? ''}`; // ✅ Prevents undefined errors

    console.debug(
      `📌 [${timestamp}] [Request] [ID: ${requestId}] URL:`,
      fullUrl
    );
    console.debug('🔹 [Method]:', config.method?.toUpperCase());
    console.debug('🔹 [Headers]:', config.headers);
    console.debug('🔹 [Params]:', config.params);
    console.debug('🔹 [Body]:', config.data);
  }

  return config;
};

const logResponseSuccess = (response: AxiosResponse) => {
  if (process.env.NODE_ENV !== 'production') {
    const config = response.config as ExtendedAxiosRequestConfig;
    const { requestId, timestamp } = config.metadata || {};

    const duration = timestamp
      ? `${new Date().getTime() - new Date(timestamp).getTime()}ms`
      : 'N/A';

    const fullUrl = `${config.baseURL ?? ''}${config.url ?? ''}`;

    console.debug(
      `✅ [${timestamp}] [Response] [ID: ${requestId}] URL:`,
      fullUrl
    );
    console.debug('🔹 [Status]:', response.status);
    console.debug('🔹 [Data]:', response.data);
    console.debug('⏳ [Duration]:', duration);
  }
};

const logResponseError = (error: AxiosError) => {
  if (process.env.NODE_ENV !== 'production') {
    const config = error.config as ExtendedAxiosRequestConfig;
    const { requestId, timestamp } = config.metadata || {};

    const duration = timestamp
      ? `${new Date().getTime() - new Date(timestamp).getTime()}ms`
      : 'N/A';

    const fullUrl = `${config.baseURL ?? ''}${config.url ?? ''}`;

    console.error(`❌ [${timestamp}] [Error] [ID: ${requestId}] URL:`, fullUrl);
    console.error('🔹 [Status]:', error.response?.status);
    console.error('🔹 [Error Message]:', error.message);
    console.error('⏳ [Duration]:', duration);
  }
};

client.interceptors.request.use(
  async (config) => {
    const tokenAuth = getCookie('token', { cookies });
    if (tokenAuth) {
      config.headers['Auth'] = `Bearer ${tokenAuth}`;
    }

    config = logRequest(config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  async (response) => {
    if (response.data.code === 401) {
      const expectedErrorMsg = 'Invalid token';
      if (
        response.data.error.toLocaleLowerCase() ===
        expectedErrorMsg.toLocaleLowerCase()
      ) {
        redirect('/login?status=401');
      }
    }

    logResponseSuccess(response);

    return response;
  },
  (error) => {
    logResponseError(error);
    return Promise.reject(error);
  }
);

export default client;
