import IconButton from "Components/UI/IconButton";
import { SubText, Text } from "Components/UI/Typography";
import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 35px;
`;

export const TableHead = styled.thead`
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondaryGray};
  text-align: left;
  gap: 10px;
`;

export const TableHeading = styled.th`
  padding: 20px 30px 20px 0;
`;

export const TableData = styled.td`
  padding: 15px 20px 15px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled(TableData)`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const TrackSubText = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const AlbumTitle = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const TrackNumber = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const TrackDuration = styled(TableData)`
  min-width: 140px;
`;

export const Line = styled.td`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 51.56%,
    rgba(198, 198, 198, 0) 100%
  );
`;
