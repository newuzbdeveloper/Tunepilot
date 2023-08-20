import PropTypes from "prop-types";
import { ButtonText } from "Components/UI/Typography";
import {
  HeroImage,
  HeroText,
  HeroTitle,
  ImageWrapper,
  PlayButton,
  TextWrapper,
  Wrapper,
} from "./styled";
import RadioDesktopImage from "Assets/Images/RadioDesktopImage.svg";
import RadioTabletImage from "Assets/Images/RadioTabletImage.svg";
import { Play } from "Components/UI/Icon";
import { useContext } from "react";
import { PlayerDispatchContext } from "Components/Context/PlayerContext";
import { actions } from "Components/Context/Actions";
import { useWindowSize } from "Hooks/useWindowSize";
import { breakPoints } from "Styles/BreakPoints";

function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { width } = useWindowSize;
  const handleClickRadio = () => {
    dispatch({
      type: actions.SET_TRACK_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };
  return (
    <Wrapper>
      <TextWrapper>
        <HeroTitle>Radio</HeroTitle>
        <HeroText>
          Pick your todays mood.
          <br /> We will play a perfect mix!
        </HeroText>
        <PlayButton
          disabled={!tracks || tracks.length <= 0}
          onClick={handleClickRadio}
        >
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <ImageWrapper>
        <HeroImage
          src={width < breakPoints.xl ? RadioTabletImage : RadioDesktopImage}
          alt="Image of a radio and hands."
        />
      </ImageWrapper>
    </Wrapper>
  );
}

Hero.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default Hero;
