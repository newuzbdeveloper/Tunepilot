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
import { GlobalStyle } from "./Styles/Golbal";
import {
  ArrowLeft,
  ArrowRight,
  Like,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Users,
  Volume,
} from "Components/UI/Icon";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTitle>MainTitle.</MainTitle>
      <SectionTitle>SectionTitle.</SectionTitle>
      <SectionSubTitle>SectionSubTitle.</SectionSubTitle>
      <Text>Text.</Text>
      <SubText>SubText.</SubText>
      <ButtonText>ButtonText.</ButtonText>
      <br />
      <Like />
      <Pause />
      <SkipLeft />
      <SkipRight />
      <Users />
      <ArrowLeft />
      <ArrowRight />
      <Search />
      <Music />
      <Play />
      <Volume />
    </ThemeProvider>
  );
}

export default App;
