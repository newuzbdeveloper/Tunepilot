import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "Assets/Commons/constants";
import { MainTitle } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  gap: 60px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT} + 50px);
  }

  ${device.md} {
    gap: 25px;
    padding-top: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SongAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
`;

export const GenreName = styled(MainTitle)`
  text-align: left;
`;
