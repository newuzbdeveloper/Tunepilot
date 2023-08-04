import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Theme";
import { GlobalStyle } from "./Styles/Golbal";
import Header from "Components/Header";
import HomePage from "Pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
