import LoginForm from '@/components/LoginForm';
import { LoginFormProvider } from '@/context/LoginFormContext';
import { Box } from '@mui/material';

export default function Index() {
  return (
    <Box
      width="100%"
      height="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LoginFormProvider>
        <LoginForm />
      </LoginFormProvider>
    </Box>
  );
}
