import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#daa83a',
    },
    text: {
      primary: '#daa83a',
      secondary: {
        boxShadow: '1px 1px 15px 1px #a37c27',
      },
      tertiary: '#040c0e',
    },
    secondary: {
      main: '#a37c27',
    },
  },
});
