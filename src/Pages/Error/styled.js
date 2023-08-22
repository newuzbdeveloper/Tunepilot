import {
  HEADER_HEIGHT,
  MOBILE_PLAYER_HEIGHT,
  PLAYER_HEIGHT,
} from "Assets/Commons/constants";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${PLAYER_HEIGHT}px);

  ${device.lg} {
    height: ${MOBILE_PLAYER_HEIGHT};
  }
`;
