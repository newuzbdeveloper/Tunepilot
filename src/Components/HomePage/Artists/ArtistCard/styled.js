import { Text } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;

  ${device.md} {
    width: 75px;
    height: 75px;
  }
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;

  ${device.md} {
    max-width: 95px;
    font-size: 16px;
    line-height: 19px;
  }
`;
