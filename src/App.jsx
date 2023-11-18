import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import './App.css';
import { customizations } from './theme';
import AppRoutes from './router/AppRoutes';

const StyledPaper = styled(Paper)(() => ({
  borderRadius: 0,
  minHeight: '100vh',
  minWidth: '100vw',
}));

function App() {
  const [mode, setMode] = useState('light');

  let theme = createTheme(customizations(mode));
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledPaper elevation={0}>
        <AppRoutes />
      </StyledPaper>
    </ThemeProvider>
  );
}

export default App;
