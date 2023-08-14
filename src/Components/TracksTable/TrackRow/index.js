import { Like, Pause, Play } from "Components/UI/Icon";
import PropTypes from "prop-types";
import {
  AlbumTitle,
  PLayIcon,
  StyledIconButton,
  StyledTrackRow,
  TableData,
  TrackDuration,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackNumber,
  TrackSubText,
  TrackTitle,
} from "./styled";
import { SubText } from "Components/UI/Typography";
import { formatMinAndSec } from "Utils/time";
import Skeleton from "react-loading-skeleton";

function TrackRow({ track, index, onClick, isPlaying }) {
  return (
    <StyledTrackRow key={track?.id} onClick={() => onClick(track)}>
      <TableData>
        <TrackNumber className="trackNumber">
          {track ? String(index + 1).padStart(2, "0") : <Skeleton width={30} />}
        </TrackNumber>
        <PLayIcon className="playIcon">
          {isPlaying ? <Pause /> : <Play />}
        </PLayIcon>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage
            src={track?.album.cover}
            alt={`${track?.album.title}'s cover photo`}
          />
        ) : (
          <Skeleton width={65} height={65} borderRadius={25} />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>
            {track ? track?.title : <Skeleton width={300} />}
          </TrackTitle>
          <TrackSubText>
            {track ? track?.artist.name : <Skeleton width={260} />}
          </TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <TrackDuration>
        <SubText>
          {track ? formatMinAndSec(track?.duration) : <Skeleton width={48} />}
        </SubText>
      </TrackDuration>
      <TableData>
        <AlbumTitle>
          {track ? track?.album.title : <Skeleton width={300} />}
        </AlbumTitle>
      </TableData>
      <TableData>
        {track ? (
          <StyledIconButton>
            <Like />
          </StyledIconButton>
        ) : (
          <StyledIconButton width={25} height={25}>
            <Skeleton width={25} height={25} />
          </StyledIconButton>
        )}
      </TableData>
    </StyledTrackRow>
  );
}
TrackRow.propTypes = {
  onClick: PropTypes.func,
  track: PropTypes.shape({
    id: PropTypes.number,
    duration: PropTypes.number,
    title: PropTypes.string,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  }),
  index: PropTypes.number,
  isPlaying: PropTypes.bool,
};

export default TrackRow;
