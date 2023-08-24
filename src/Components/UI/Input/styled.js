import { styled } from "styled-components";

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.lightWhite};
  color: ${({ theme }) => theme.colors.white};
  padding: 17px 54px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-family: ${({ theme }) => theme.fontStyle.Inter};
  font-size: 22px;
  line-height: 27px;
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: 17px 20px;
  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;
