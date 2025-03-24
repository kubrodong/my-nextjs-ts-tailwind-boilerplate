'use client'; // For Next.js app directory

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { useLoginForm } from '@/hooks/useLoginForm';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/services/authService';

interface LoginFormContextProps {
  formik: ReturnType<typeof useLoginForm>;
}

const LoginFormContext = createContext<LoginFormContextProps | null>(null);

export const useLoginFormContext = () => {
  const context = useContext(LoginFormContext);
  if (!context)
    throw new Error(
      'useLoginFormContext must be used within LoginFormProvider'
    );
  return context;
};

export const LoginFormProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const formik = useLoginForm(async (values) => {
    postLogin(values).then(() => router.push('/home'));
  });

  // ✅ Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ formik }), [formik]);

  return (
    <LoginFormContext.Provider value={contextValue}>
      {children}
    </LoginFormContext.Provider>
  );
};
