import { styled } from "styled-components";

export const Wrapper = styled.header`
  padding: 0 120px;
  height: 118px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 0px 0px 25px 25px;
`;

export const LogoWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
