import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00e812',
      light: '#6aff56',
      dark: '#00b400',
      contrastText: '#EEEEEE'
    },
    secondary: {
      main: '#c9007f',
      light: '#ff52ae',
      dark: '#930053',
      contrastText: '#e3f2fd'
    },
    background: {
      default: '#232F34',
      paper: '#232F44'
    },
  }
});