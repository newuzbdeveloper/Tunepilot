import { SectionSubTitle } from "Components/UI/Typography";
import { styled } from "styled-components";

export const ContentWrapper = styled.main`
  padding: 0 120px;
`;

export const AtristsAndSongsWrapper = styled.section`
  display: grid;
  grid-template-columns: 65% 35%;
  padding-bottom: 125px;
  overflow: hidden;
`;

export const GreyTitle = styled(SectionSubTitle)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const StyledAside = styled.aside`
  margin-left: 35px;
`;
