import PropTypes from "prop-types";
import {
  AlbumTitle,
  Line,
  StyledIconButton,
  Table,
  TableData,
  TableHead,
  TableHeading,
  TrackDuration,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackNumber,
  TrackSubText,
  TrackTitle,
} from "./styled";
import { Like } from "Components/UI/Icon";
import { formatMinAndSec } from "Utils/time";
import { SubText } from "Components/UI/Typography";

function TracksTable({ tracks }) {
  console.log(tracks);
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeading>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Time</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Album Name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <tr key={track.id}>
            <TableData>
              <TrackNumber>{String(index + 1).padStart(2, "0")}</TrackNumber>
            </TableData>
            <TrackInfo>
              <TrackInfoImage
                src={track.album.cover}
                alt={`${track.album.name}'s cover photo`}
              />
              <TrackInfoTextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackSubText>{track.artist.name}</TrackSubText>
              </TrackInfoTextWrapper>
            </TrackInfo>
            <TrackDuration>
              <SubText>{formatMinAndSec(track.duration)}</SubText>
            </TrackDuration>
            <TableData>
              <AlbumTitle>{track.album.title}</AlbumTitle>
            </TableData>
            <TableData>
              <StyledIconButton>
                <Like />
              </StyledIconButton>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

export default TracksTable;
