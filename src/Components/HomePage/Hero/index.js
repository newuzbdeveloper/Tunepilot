import { ButtonText, MainTitle, Text } from "Components/UI/Typography";
import { PlayButton, TextWrapper, Wrapper } from "./styled";
import RadioDesktopImage from "Assets/Images/RadioDesktopImage.svg";
import { Play } from "Components/UI/Icon";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>
          Pick your todays mood.
          <br /> We will play a perfect mix!
        </Text>
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
