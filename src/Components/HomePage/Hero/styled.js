import Button from "Components/UI/Button";
import { Text } from "Components/UI/Typography";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin: 24px 0 35px 0;
  background-color: ${({ theme }) => theme.colors.purple};
  max-width: 100%;
  height: 382px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  margin: 22px 0 35px;
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;
export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const PlayButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  max-height: 382px;
`;
