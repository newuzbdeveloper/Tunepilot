import IconButton from "Components/UI/IconButton";
import { SubText, Text } from "Components/UI/Typography";
import { styled } from "styled-components";

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px 20px 10px 0;
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightWhite};
    .trackNumber {
      display: none;
    }
    .playIcon {
      display: block;
    }
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const PLayIcon = styled.div`
  display: none;
  width: 25px;
  height: 25px;
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
