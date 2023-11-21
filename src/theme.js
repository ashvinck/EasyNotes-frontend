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
          fontFamily: 'Source Code Pro, monospace',
        },
      },
    },
  },
  typography: {
    h2: {
      fontFamily: 'Pacifico, cursive',
    },
    fontFamily:
      'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  },
});
