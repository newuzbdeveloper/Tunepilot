import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Theme";
import { GlobalStyle } from "./Styles/Golbal";
import Header from "Components/Header";
import Home from "Pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyle />
        <Header />
        <Home />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
