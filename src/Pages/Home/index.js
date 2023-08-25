import { Hero, Genres } from "Components/HomePage";
import { AtristsAndSongsWrapper, GreyTitle, StyledAside } from "./styled";
import { SectionTitle } from "Components/UI/Typography";
import "swiper/css";
import "swiper/css/pagination";
import Artists from "Components/HomePage/Artists";
import { loadCharts, loadRadioTracks } from "Components/HomePage/Services/api";
import TracksTable from "Components/TracksTable";
import { useLoadData } from "Hooks/useLoadData";

function Home() {
  const [data, isLoading] = useLoadData(() =>
    Promise.all([loadCharts(), loadRadioTracks()]),
  );
  const [chart, radio] = data || [];

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <AtristsAndSongsWrapper>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Trending right now</SectionTitle>
          <TracksTable tracks={chart?.tracks?.data} isLoading={isLoading} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </StyledAside>
      </AtristsAndSongsWrapper>
    </main>
  );
}

export default Home;
