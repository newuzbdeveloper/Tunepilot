import IconButton from "Components/UI/IconButton";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  overflow: hidden;

  ${device.md} {
    gap: 20px;
    margin-bottom: 35px;
  }
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

  ${device.md} {
    gap: 12px;
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  gap: 10px;

  ${device.md} {
    gap: 8px;
  }
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
