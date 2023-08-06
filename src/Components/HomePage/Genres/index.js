import React, { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "Components/UI/Icon";
import { SectionSubTitle } from "Components/UI/Typography";
import {
  Button,
  ButtonWrapper,
  GenreSkeletonWrapper,
  GenreWrapper,
  TitleRow,
  Wrapper,
} from "./styled";
import axios from "axios";
import GenreCard from "./GenreCard";

function Genres() {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await axios.get("/genre");
      setIsLoading(true);
      setGenres(
        data.data.data.filter((genre) => genre.name.toLowerCase() !== "all"),
      );
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubTitle>Genres</SectionSubTitle>
        <ButtonWrapper>
          <Button withbackground width={24} height={24} onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button withbackground width={24} height={24} onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonWrapper>
      </TitleRow>
      <GenreWrapper>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination]}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <GenreCard
                  name={genre.name}
                  backgroundImage={genre.picture_medium}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </GenreWrapper>
    </Wrapper>
  );
}

export default Genres;
