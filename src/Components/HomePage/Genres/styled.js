import IconButton from "Components/UI/IconButton";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
  overflow: hidden;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 35px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const GenreWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  gap: 10px;
`;

export const GenreSkeletonWrapper = styled.div`
  display: flex;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
