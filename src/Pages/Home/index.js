import { Hero, Genres } from "Components/HomePage";
import {
  AtristsAndSongsWrapper,
  ContentWrapper,
  GreyTitle,
  StyledAside,
} from "./styled";
import { SectionTitle } from "Components/UI/Typography";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Artists from "Components/HomePage/Artists";
import { toast } from "react-toastify";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get("/chart");
        setChart(data.data);
      } catch {
        toast.error("Error");
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
          <SectionTitle>Trending right now.</SectionTitle>
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
