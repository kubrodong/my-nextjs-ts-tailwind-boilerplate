import MultiStepForm from '@/components/MultiStepForm';
import { MultiStepFormProvider } from '@/context/MultiStepFormContext';

export default function Home() {
  return (
    <MultiStepFormProvider>
      <MultiStepForm />
    </MultiStepFormProvider>
  );
}
