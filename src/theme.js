export const customizations = (mode) => ({
  palette: {
    mode: mode,
    primary: {
      light: '#ecf2ff',
      main: '#a0bdff',
      dark: '#407bff',
    },
    secondary: {
      light: '#e5e5e5',
      main: '#000000',
      dark: '#2d2d2d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});
