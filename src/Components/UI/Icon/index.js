import { styled } from "styled-components";
import { ReactComponent as ArrowIcon } from "Assets/Icons/arrow.svg";
import { ReactComponent as LikeIcon } from "Assets/Icons/like.svg";
import { ReactComponent as MusicIcon } from "Assets/Icons/music.svg";
import { ReactComponent as PauseIcon } from "Assets/Icons/pause.svg";
import { ReactComponent as PlayIcon } from "Assets/Icons/play.svg";
import { ReactComponent as SearchIcon } from "Assets/Icons/search.svg";
import { ReactComponent as SkipIcon } from "Assets/Icons/skip.svg";
import { ReactComponent as SkipRightIcon } from "Assets/Icons/skipRight.svg";
import { ReactComponent as VolumeIcon } from "Assets/Icons/volume.svg";
import { ReactComponent as UserIcon } from "Assets/Icons/users.svg";
import { ReactComponent as LogoIcon } from "Assets/Icons/logo.svg";

const ArrowLeft = styled(ArrowIcon)`
  stroke: ${(props) => props.color || "white"};
  transform: rotate(180deg);
`;

const ArrowRight = styled(ArrowIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Like = styled(LikeIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "white"};
`;

const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const Search = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || "white"};
`;

const SkipRight = styled(SkipRightIcon)`
  fill: ${(props) => props.color || "white"};
`;

const Volume = styled(VolumeIcon)`
  fill: ${(props) => props.color || "white"};
`;

const Users = styled(UserIcon)`
  fill: ${(props) => props.color || "white"};
`;

export {
  ArrowLeft,
  ArrowRight,
  Like,
  Music,
  Pause,
  Play,
  Search,
  SkipLeft,
  SkipRight,
  Volume,
  Users,
  LogoIcon,
};
