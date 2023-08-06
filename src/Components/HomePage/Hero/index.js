import { ButtonText, MainTitle } from "Components/UI/Typography";
import { HeroText, PlayButton, TextWrapper, Wrapper } from "./styled";
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
      <img src={RadioDesktopImage} alt="Image of a radio and hands." />
    </Wrapper>
  );
}

export default Hero;
