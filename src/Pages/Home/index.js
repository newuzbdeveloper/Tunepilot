import { Hero, Genres } from "Components/HomePage";
import { ContentWrapper } from "./styled";

function HomePage() {
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
    </ContentWrapper>
  );
}

export default HomePage;
