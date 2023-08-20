import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;

  ${device.md} {
    margin-top: 20px;
  }
`;

export const ArtistsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  gap: 10px;
`;

export const ArtistSkeletonWrapper = styled.div`
  display: flex;
`;

export const ArtistCardSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;
