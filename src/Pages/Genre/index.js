import { loadGenre } from "Components/HomePage/Services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GenreName, SongAndIconWrapper, TextWrapper, Wrapper } from "./styled";
import { SmallText } from "Components/UI/Typography";
import { Music } from "Components/UI/Icon";
import TracksTable from "Components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { theme } from "Styles/Theme";

function Genre() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        setGenre(genre);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

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
