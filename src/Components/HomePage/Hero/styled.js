import Button from "Components/UI/Button";
import { MainTitle, Text } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

const HERO_IMAGE_BREAKPOINT = 1050;
export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0 35px 0;
  background-color: ${({ theme }) => theme.colors.purple};
  max-width: 100%;
  height: 382px;
  border-radius: 25px;

  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    align-items: center;
    justify-content: center;
    height: 305px;
    text-align: center;
    padding: 41px 32px;
    margin: 30px 0 35px;
  }
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;
export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding-left: 62px;
  }

  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    width: 100%;
    padding: 0;
  }
`;

export const PlayButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  max-height: 382px;
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    display: none;
  }
`;

export const HeroTitle = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;
