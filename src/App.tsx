import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
      </ThemeProvider>
  );
}

export default App;
