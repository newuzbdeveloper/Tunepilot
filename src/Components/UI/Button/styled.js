import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 15px 35px;
  border-radius: 20px;
  background: #e2577f;
  box-shadow: 0px 0px 0px 0px rgba(7, 21, 44, 0.11),
    0px 1px 3px 0px rgba(7, 21, 44, 0.11), 2px 6px 6px 0px rgba(7, 21, 44, 0.09),
    4px 13px 8px 0px rgba(7, 21, 44, 0.05),
    7px 23px 9px 0px rgba(7, 21, 44, 0.02),
    10px 35px 10px 0px rgba(7, 21, 44, 0);
  margin-top: 52px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
  }
`;
