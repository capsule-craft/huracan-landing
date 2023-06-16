import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AfterHero } from "./components/AfterHero";
import { Footer } from "./components/Footer";
import { UseCases } from "./components/UseCases";

import data from "./data/data.json";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // @ts-expect-error
    white: { main: "#fff" },
    primary: { main: "#0a7aea" },
    background: { default: "#0A1424" },
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Hero data={data.Hero} topBarData={data.TopBar} />
      <AfterHero data={data.AfterHero} />
      <Features data={data.Features} />
      <UseCases data={data.UseCases} />
      <Footer data={data.Footer} />
    </ThemeProvider>
  );
}
