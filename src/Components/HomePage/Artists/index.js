import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ArtistCard from "./ArtistCard";
import {
  ArtistCardSkeletonWrapper,
  ArtistSkeletonWrapper,
  ArtistsWrapper,
  Wrapper,
} from "./styled";
import { useWindowSize } from "Hooks/useWindowSize";
import { breakPoints } from "Styles/BreakPoints";

function Artists({ isLoading, artists }) {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakPoints.md;
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistCardSkeletonWrapper key={num}>
              <Skeleton
                wrapper={ArtistSkeletonWrapper}
                key={num}
                height={isMobileLayout ? 75 : 95}
                width={isMobileLayout ? 75 : 95}
                circle
              />
              <Skeleton height={isMobileLayout ? 19 : 27} />
            </ArtistCardSkeletonWrapper>
          ))}
        <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <ArtistCard name={genre.name} image={genre.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}
Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
