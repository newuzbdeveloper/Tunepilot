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

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>
          Pick your todays mood. <br />
          We will play a perfect mix!
        </HeroText>
        <PlayButton>
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

export default Hero;
