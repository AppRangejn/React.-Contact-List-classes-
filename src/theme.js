import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#316dec',
    },
    background: {
      default: '#f8f8f8',
      paper: '#ffffff',
    },
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',
    button: {
      fontFamily: '"Roboto Mono", monospace',
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& input': {
            fontFamily: '"Roboto Mono", monospace',
          },
          '& label': {
            fontFamily: '"Roboto Mono", monospace',
          },
          '& .MuiFormHelperText-root': {
            fontFamily: '"Roboto Mono", monospace',
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default theme;