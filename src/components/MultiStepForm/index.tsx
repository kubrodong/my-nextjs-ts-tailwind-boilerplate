'use client';

import { useMultiStepFormContext } from '@/context/MultiStepFormContext';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import { Paper } from '@mui/material';

export default function MultiStepForm() {
  const { step } = useMultiStepFormContext();

  return (
    <Paper className="max-w-md mx-auto p-6 rounded" elevation={3}>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </Paper>
  );
}
