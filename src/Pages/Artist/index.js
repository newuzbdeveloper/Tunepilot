import { loadArtist } from "Components/HomePage/Services/api";
import { useParams } from "react-router-dom";
import {
  ArtistImage,
  ArtistImageAndName,
  ArtistImageLoaderWrapper,
  ArtistTitle,
  SongAndIconWrapper,
  TextWrapper,
  TopTracks,
  Wrapper,
} from "./styled";
import { SectionTitle, SmallText } from "Components/UI/Typography";
import { Music } from "Components/UI/Icon";
import TracksTable from "Components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "Styles/Theme";
import { breakPoints } from "Styles/BreakPoints";
import { useWindowSize } from "Hooks/useWindowSize";
import { useLoadData } from "Hooks/useLoadData";

function Artist() {
  const { width } = useWindowSize();
  const { artistId } = useParams();
  const [artist, isLoading] = useLoadData(() => loadArtist(artistId));

  return (
    <Wrapper>
      <ArtistImageAndName>
        {artist ? (
          <ArtistImage
            src={artist?.artist?.picture_big}
            alt={`${artist?.artist?.name}'photo`}
          />
        ) : (
          <Skeleton
            width={width < breakPoints.md ? "100%" : 350}
            height={width < breakPoints.md ? 176 : 350}
            borderRadius={25}
            wrapper={ArtistImageLoaderWrapper}
          />
        )}
        <TextWrapper>
          <ArtistTitle>
            {artist?.artist?.name || <Skeleton width={150} />}
          </ArtistTitle>
          <SongAndIconWrapper>
            <Music color={theme.colors.secondaryGray} />
            <SmallText>
              {isLoading ? (
                <Skeleton width={60} />
              ) : (
                `${artist?.artist?.nb_fan} Fans`
              )}
            </SmallText>
          </SongAndIconWrapper>
        </TextWrapper>
      </ArtistImageAndName>
      <TopTracks>
        <SectionTitle>Top Tracks</SectionTitle>
        <TracksTable isLoading={isLoading} tracks={artist?.track} />
      </TopTracks>
    </Wrapper>
  );
}

export default Artist;
