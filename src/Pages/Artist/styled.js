import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "Assets/Commons/constants";
import { MainTitle } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  gap: 35px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: calc(${MOBILE_PLAYER_HEIGHT} + 50px);
  }

  ${device.md} {
    gap: 25px;
    padding-top: 28px;
  }
`;

export const ArtistImageAndName = styled.div`
  display: flex;
  gap: 50px;

  ${device.md} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ArtistImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 25px;
  object-fit: cover;

  ${device.md} {
    height: 176px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${device.md} {
    gap: 5px;
  }
`;

export const SongAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const ArtistTitle = styled(MainTitle)`
  text-align: left;
`;

export const TopTracks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ArtistImageLoaderWrapper = styled.div`
  display: flex;
`;
