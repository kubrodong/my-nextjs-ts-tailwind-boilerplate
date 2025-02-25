import { useMultiStepFormContext } from '@/context/MultiStepFormContext';
import { Box, Button, TextField, Typography } from '@mui/material';

import React from 'react';

export default function StepOne() {
  const { formik, nextStep } = useMultiStepFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography>Step 1: User Details</Typography>
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        fullWidth
        error={formik.touched.name && formik.errors.name != null}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Button variant="outlined" onClick={nextStep}>
        Next
      </Button>
    </Box>
  );
}
