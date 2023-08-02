import { styled } from "styled-components";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontStyle.Poppins}, sen-serif;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 90px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontStyle.Poppins}, sen-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 35px;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SectionSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontStyle.Poppins}, sen-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fontStyle.Inter}, sen-serif;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fontStyle.Inter}, sen-serif;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fontStyle.Inter}, sen-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 23px;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
