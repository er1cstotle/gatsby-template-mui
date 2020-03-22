import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A700
    }
  }
});

const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;

};

export default MyThemeProvider;