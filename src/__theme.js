import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    typography: {
      main: '#707c80',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
        // default: 'rgb(229, 234, 236)',
        default: 'rgb(227, 232, 237)',
    }
  },
});

export default theme;