import { SubText } from "Components/UI/Typography";
import TrackRow from "./TrackRow";
import { Line, Table, TableHead, TableHeading } from "./styled";
import PropTypes from "prop-types";

function TracksTable({ tracks, isLoading }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading forPaddingLeft>
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
        {!isLoading &&
          tracks?.map((track, index) => (
            <TrackRow key={track.id} track={track} index={index} />
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
