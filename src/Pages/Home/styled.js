import { PLAYER_HEIGHT } from "Assets/Commons/constants";
import { SectionSubTitle } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const AtristsAndSongsWrapper = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
  overflow: hidden;

  ${device.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const GreyTitle = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const StyledAside = styled.aside`
  margin-left: 35px;
`;
