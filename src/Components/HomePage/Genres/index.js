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
import GenreCard from "./GenreCard";
import { loadGenres } from "../Services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useWindowSize } from "Hooks/useWindowSize";
import { breakPoints } from "Styles/BreakPoints";

function Genres() {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowSize();
  const isMobileLayout = width < breakPoints.md;

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
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubTitle>Genres</SectionSubTitle>
        <ButtonWrapper>
          <Button
            withbackground
            width={isMobileLayout ? 25 : 30}
            height={isMobileLayout ? 25 : 30}
            onClick={handlePrev}
          >
            <ArrowLeft />
          </Button>
          <Button
            withbackground
            width={isMobileLayout ? 25 : 30}
            height={isMobileLayout ? 25 : 30}
            onClick={handleNext}
          >
            <ArrowRight />
          </Button>
        </ButtonWrapper>
      </TitleRow>
      <GenreWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={isMobileLayout ? 95 : 116}
              width={isMobileLayout ? 137 : 220}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={isMobileLayout ? 9 : 20}
          modules={[Pagination]}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`/genres/${genre.id}`}>
                  <GenreCard
                    name={genre.name}
                    backgroundImage={genre.picture_medium}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenreWrapper>
    </Wrapper>
  );
}

export default Genres;
