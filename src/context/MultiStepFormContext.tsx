'use client'; // For Next.js app directory

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { postUser } from '@/services/userService';

interface MultiStepFormContextProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  formik: ReturnType<typeof useMultiStepForm>;
}

const MultiStepFormContext = createContext<MultiStepFormContextProps | null>(
  null
);

export const useMultiStepFormContext = () => {
  const context = useContext(MultiStepFormContext);
  if (!context)
    throw new Error(
      'useMultiStepFormContext must be used within MultiStepFormProvider'
    );
  return context;
};

export const MultiStepFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [step, setStep] = useState(1);
  const formik = useMultiStepForm(async (values) => {
    await postUser(values); // ✅ Calls server action
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  // ✅ Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({ step, nextStep, prevStep, formik }),
    [formik]
  );

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
