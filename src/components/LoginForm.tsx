'use client';

import { useLoginFormContext } from '@/context/LoginFormContext';
import { Button, Paper, TextField } from '@mui/material';
import React from 'react';

export default function LoginForm() {
  const { formik } = useLoginFormContext();

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <TextField
          id="username"
          type="text"
          variant="standard"
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          id="password"
          type="password"
          variant="standard"
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
}
