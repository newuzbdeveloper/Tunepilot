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

  ${device.md} {
    gap: 25px;
    padding-top: 28px;
  }
`;

export const InputWrapper = styled.div`
  width: 70%;
  margin: 0 auto;

  ${device.lg} {
    width: 100%;
  }
`;

export const TableTitle = styled(SectionSubTitle)`
  margin-bottom: 30px;

  ${device.md} {
    margin-bottom: 15px;
  }
`;
export const NotFoundText = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;
