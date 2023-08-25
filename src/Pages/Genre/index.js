import { loadGenre } from "Components/HomePage/Services/api";
import { useParams } from "react-router-dom";
import { GenreName, SongAndIconWrapper, TextWrapper, Wrapper } from "./styled";
import { SmallText } from "Components/UI/Typography";
import { Music } from "Components/UI/Icon";
import TracksTable from "Components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "Styles/Theme";
import { useLoadData } from "Hooks/useLoadData";

function Genre() {
  const { genreId } = useParams();
  const [genre, isLoading] = useLoadData(() => loadGenre(genreId));

  return (
    <Wrapper>
      <TextWrapper>
        <GenreName>{genre?.genre?.name || <Skeleton width={150} />}</GenreName>
        <SongAndIconWrapper>
          <Music color={theme.colors.secondaryGray} />
          <SmallText>
            {isLoading ? (
              <Skeleton width={60} />
            ) : (
              `${genre?.track?.length}songs`
            )}
          </SmallText>
        </SongAndIconWrapper>
      </TextWrapper>
      <TracksTable isLoading={isLoading} tracks={genre?.track} />
    </Wrapper>
  );
}

export default Genre;
