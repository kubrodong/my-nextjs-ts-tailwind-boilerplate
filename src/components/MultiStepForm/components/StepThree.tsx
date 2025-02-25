import { useMultiStepFormContext } from '@/context/MultiStepFormContext';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function StepThree() {
  const { formik, prevStep } = useMultiStepFormContext();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography>Step 3: Set Password</Typography>
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          fullWidth
          error={
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword != null
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <TextField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          fullWidth
          error={
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword != null
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Box className="flex gap-4">
          <Button variant="outlined" fullWidth onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}
