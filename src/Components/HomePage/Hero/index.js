import PropTypes from "prop-types";
import { ButtonText, MainTitle } from "Components/UI/Typography";
import {
  HeroText,
  ImageWrapper,
  PlayButton,
  TextWrapper,
  Wrapper,
} from "./styled";
import RadioDesktopImage from "Assets/Images/RadioDesktopImage.svg";
import { Play } from "Components/UI/Icon";
import { useContext } from "react";
import { PlayerDispatchContext } from "Components/Context/PlayerContext";
import { actions } from "Components/Context/Actions";

function Hero({ tracks }) {
  const dispatch = useContext(PlayerDispatchContext);
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
        <MainTitle>Radio</MainTitle>
        <HeroText>
          Pick your todays mood. <br />
          We will play a perfect mix!
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
        <img src={RadioDesktopImage} alt="Image of a radio and hands." />
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
