import IconButton from "Components/UI/IconButton";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
