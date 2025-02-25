import { useMultiStepFormContext } from '@/context/MultiStepFormContext';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function StepTwo() {
  const { formik, nextStep, prevStep } = useMultiStepFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography>Step 2: Account Info</Typography>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        fullWidth
        error={formik.touched.email && formik.errors.email != null}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Box className="flex gap-4">
        <Button variant="outlined" fullWidth onClick={prevStep}>
          Back
        </Button>
        <Button variant="outlined" fullWidth onClick={nextStep}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
