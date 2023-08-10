import { Hero, Genres } from "Components/HomePage";
import { AtristsAndSongsWrapper, GreyTitle, StyledAside } from "./styled";
import { SectionTitle } from "Components/UI/Typography";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Artists from "Components/HomePage/Artists";
import { toast } from "react-toastify";
import { loadCharts } from "Components/HomePage/Services/api";
import TracksTable from "Components/TracksTable";
import { ContentWrapper } from "Components/Layout";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadCharts();
        setChart(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <ContentWrapper>
      <Hero />
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
    </ContentWrapper>
  );
}

export default Home;
