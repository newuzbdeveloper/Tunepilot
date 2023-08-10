import { Like, Play } from "Components/UI/Icon";
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

function TrackRow({ track, index }) {
  return (
    <StyledTrackRow key={track?.id}>
      <TableData>
        <TrackNumber className="trackNumber">
          {String(index + 1).padStart(2, "0")}
        </TrackNumber>
        <PLayIcon className="playIcon">
          <Play />
        </PLayIcon>
      </TableData>
      <TrackInfo>
        <TrackInfoImage
          src={track?.album.cover}
          alt={`${track?.album.title}'s cover photo`}
        />
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title}</TrackTitle>
          <TrackSubText>{track?.artist.name}</TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <TrackDuration>
        <SubText>{formatMinAndSec(track?.duration)}</SubText>
      </TrackDuration>
      <TableData>
        <AlbumTitle>{track?.album.title}</AlbumTitle>
      </TableData>
      <TableData>
        <StyledIconButton>
          <Like />
        </StyledIconButton>
      </TableData>
    </StyledTrackRow>
  );
}
TrackRow.propTypes = {
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
};

export default TrackRow;
