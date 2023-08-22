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
import { theme } from "Styles/Theme";
import { breakPoints } from "Styles/BreakPoints";

function TrackRow({
  track,
  index,
  onClick,
  isPlaying,
  handleSaveTrack,
  isSaved,
  screenWidth,
}) {
  const isMobileLayout = screenWidth > breakPoints.md;
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
            src={track?.album?.cover}
            alt={`${track?.album?.title}'s cover photo`}
          />
        ) : (
          <Skeleton
            width={isMobileLayout ? 65 : 45}
            height={isMobileLayout ? 65 : 45}
            borderRadius={isMobileLayout ? 25 : 15}
          />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>
            {track ? (
              track?.title
            ) : (
              <Skeleton width={isMobileLayout ? 300 : 160} />
            )}
          </TrackTitle>
          <TrackSubText>
            {track ? (
              track?.artist?.name
            ) : (
              <Skeleton width={isMobileLayout ? 260 : 120} />
            )}
          </TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      {isMobileLayout && (
        <TrackDuration>
          <SubText>
            {track?.duration ? (
              formatMinAndSec(track?.duration)
            ) : (
              <Skeleton width={48} />
            )}
          </SubText>
        </TrackDuration>
      )}
      {isMobileLayout && (
        <TableData>
          <AlbumTitle>
            {track ? track?.album?.title : <Skeleton width={300} />}
          </AlbumTitle>
        </TableData>
      )}
      <TableData>
        {track ? (
          <StyledIconButton
            onClick={(event) => {
              event.stopPropagation();
              handleSaveTrack(track.id);
            }}
          >
            <Like fill={isSaved ? theme.colors.white : "none"} />
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
  handleSaveTrack: PropTypes.func,
  isSaved: PropTypes.bool,
  screenWidth: PropTypes.number,
};

export default TrackRow;
