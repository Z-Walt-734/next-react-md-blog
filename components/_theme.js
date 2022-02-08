import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


const theme = createTheme({
  
  palette: {
    primary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#0d46a0',
      light: '#5471d2',
      dark: '#002071',
      contrastText: grey[400],
    },
    background: {
      default: 'black',
      dark: 'black',
      light: 'black',
    },
    text: {
      primary: '#fafafa',
    },
  },
});


export { theme };
