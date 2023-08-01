import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/Theme";
import {
  ButtonText,
  MainTitle,
  SectionSubTitle,
  SectionTitle,
  Text,
  SubText,
} from "./Components/UI/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainTitle>MainTitle.</MainTitle>
      <SectionTitle>SectionTitle.</SectionTitle>
      <SectionSubTitle>SectionSubTitle.</SectionSubTitle>
      <Text>Text.</Text>
      <SubText>SubText.</SubText>
      <ButtonText>ButtonText.</ButtonText>
    </ThemeProvider>
  );
}

export default App;
