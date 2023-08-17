import { SubText } from "Components/UI/Typography";
import TrackRow from "./TrackRow";
import { Line, Table, TableHead, TableHeading } from "./styled";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import {
  PlayerContext,
  PlayerDispatchContext,
} from "Components/Context/PlayerContext";
import { actions } from "Components/Context/Actions";

function TracksTable({ tracks, isLoading }) {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying, savedTrackIds } = useContext(PlayerContext);

  const handleTrackClick = (clickedTrack) => {
    if (track?.id === clickedTrack.id) {
      dispatch({
        type: actions.TOGGLE_PLAY,
      });
    } else {
      dispatch({
        type: actions.SET_TRACK_DATA,
        track: clickedTrack,
        tracks: tracks,
        isPlaying: true,
      });
    }
  };

  const handleSaveTrack = (trackId) => {
    dispatch({
      type: actions.TOGGLE_SAVE_TRACK,
      trackId,
    });
  };
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading forpaddingleft={1}>
            <SubText>
              {isLoading ? <Skeleton width={25} height={25} /> : "#"}
            </SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Song name"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Time"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton /> : "Album Name"}</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>{isLoading ? <Skeleton width={80} /> : "Actions"}</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!isLoading &&
          tracks?.map((currentTrack, index) => (
            <TrackRow
              isPlaying={track?.id === currentTrack.id && isPlaying}
              key={currentTrack.id}
              track={currentTrack}
              index={index}
              onClick={handleTrackClick}
              isSaved={savedTrackIds.includes(currentTrack.id)}
              handleSaveTrack={handleSaveTrack}
            />
          ))}
        {isLoading &&
          [...Array(9).keys()].map((num) => <TrackRow key={num} index={num} />)}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
  isLoading: PropTypes.bool,
};

export default TracksTable;
