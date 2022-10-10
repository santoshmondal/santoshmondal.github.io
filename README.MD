# Dark Theme Color Custmisation

```
let darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#001E3C",
      paper: "#0A1929",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
  typography: {
    fontPrimary: "gabriela",
  },
});

darkTheme = responsiveFontSizes(darkTheme);
```
