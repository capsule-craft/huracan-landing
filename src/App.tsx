import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AfterHero } from "./components/AfterHero";
import { Footer } from "./components/Footer";
import { UseCases } from "./components/UseCases";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // @ts-expect-error
    white: { main: "#fff" },
    primary: { main: "#0a7aea" },
    background: { default: "#0A1424" },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Hero />
      <AfterHero />
      <Features />
      <UseCases />
      <Footer />
    </ThemeProvider>
  );
}

export { App };
