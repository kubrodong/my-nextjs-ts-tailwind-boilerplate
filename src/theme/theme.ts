import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
} as ThemeOptions);

// Define dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
} as ThemeOptions);
