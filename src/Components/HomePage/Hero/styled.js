import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin: 24px 0 35px 0;
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  height: 382px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  margin: 22px 0 35px;
`;

export const TextWrapper = styled.div`
  padding-left: 123px;
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  background-color: none;
  border: none;
  gap: 10px;
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
`;
