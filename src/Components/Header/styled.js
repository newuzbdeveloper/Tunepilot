import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "Assets/Commons/constants";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.header`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;

  ${device.lg} {
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

export const LogoWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
