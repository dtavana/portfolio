import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#232323'
    },
    background: {
      default: '#232323',
    },
    text: {
        primary: 'white'
    }
  },
  typography: {
    fontFamily: "'Montserrat'"
  }
});

export default theme;