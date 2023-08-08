import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Theme";
import { GlobalStyle } from "./Styles/Golbal";
import Header from "Components/Header";
import Home from "Pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
