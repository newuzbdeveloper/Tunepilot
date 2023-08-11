import { SubText } from "Components/UI/Typography";
import TrackRow from "./TrackRow";
import { Line, Table, TableHead, TableHeading } from "./styled";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function TracksTable({ tracks, isLoading }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading forPaddingLeft>
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
