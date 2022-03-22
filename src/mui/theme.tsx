import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeOptions } from '@mui/material';
import { FC } from 'react';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          // Use existing space / prevents shifting content below field
          marginTop: 0,
          height: 0,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

const MuiThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <CssBaseline>
      { children }
    </CssBaseline>
  </ThemeProvider>
);

export default MuiThemeProvider;
