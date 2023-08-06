import { Hero, Genres } from "Components/HomePage";
import { AtristsAndSongsWrapper, ContentWrapper } from "./styled";
import { SectionSubTitle } from "Components/UI/Typography";

function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <AtristsAndSongsWrapper>
        <SectionSubTitle>Songs</SectionSubTitle>
        <SectionSubTitle>Artists</SectionSubTitle>
      </AtristsAndSongsWrapper>
    </ContentWrapper>
  );
}

export default Home;
