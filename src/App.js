import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Theme";
import { GlobalStyle } from "./Styles/Golbal";
import { ContentWrapper } from "Pages/Home";
import Header from "Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentWrapper></ContentWrapper>
    </ThemeProvider>
  );
}

export default App;
