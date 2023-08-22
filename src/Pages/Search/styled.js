import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "Assets/Commons/constants";
import { SectionSubTitle } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT} + 50px);
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const TableTitle = styled(SectionSubTitle)`
  margin-top: 70px;
`;
export const NotFoundText = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;
