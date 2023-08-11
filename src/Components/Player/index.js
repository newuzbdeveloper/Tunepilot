import Slider from "rc-slider";
import { ContentWrapper } from "Components/Layout";
import {
  ArtistName,
  ControlButtonsWrapper,
  EndOfSong,
  TrackImage,
  TrackInfo,
  TrackInfoWrapper,
  TrackTimeWrapper,
  VolumeControl,
  Wrapper,
} from "./styled";
import IconButton from "Components/UI/IconButton";
import { Pause, SkipLeft, SkipRight, Volume } from "Components/UI/Icon";
import { SubText, Text } from "Components/UI/Typography";
import { theme } from "Styles/Theme";

const track = {
  id: 65723649,
  title: "Another Love",
  title_short: "Another Love",
  title_version: "",
  link: "https://www.deezer.com/track/65723649",
  duration: 244,
  rank: 995028,
  explicit_lyrics: true,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    "https://cdns-preview-5.dzcdn.net/stream/c-59a65b4e38b7911386a2f4adbe24893b-5.mp3",
  md5_image: "23d34526dc6ef2073bb854fc91a25112",
  position: 1,
  artist: {
    id: 4044787,
    name: "Tom Odell",
    link: "https://www.deezer.com/artist/4044787",
    picture: "https://api.deezer.com/artist/4044787/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b8ac75b41eb8f74a3bef612a5fe8043c/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b8ac75b41eb8f74a3bef612a5fe8043c/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b8ac75b41eb8f74a3bef612a5fe8043c/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b8ac75b41eb8f74a3bef612a5fe8043c/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/4044787/top?limit=50",
    type: "artist",
  },
  album: {
    id: 6443018,
    title: "Long Way Down (Deluxe)",
    cover: "https://api.deezer.com/album/6443018/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/23d34526dc6ef2073bb854fc91a25112/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/23d34526dc6ef2073bb854fc91a25112/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/23d34526dc6ef2073bb854fc91a25112/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/23d34526dc6ef2073bb854fc91a25112/1000x1000-000000-80-0-0.jpg",
    md5_image: "23d34526dc6ef2073bb854fc91a25112",
    tracklist: "https://api.deezer.com/album/6443018/tracks",
    type: "album",
  },
  type: "track",
};

function Player() {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage
            src={track.album.cover}
            alt={`${track?.album.title}'s cover photo`}
          />
          <TrackInfo>
            <Text>{track.title}</Text>
            <ArtistName>{track.artist.name}</ArtistName>
          </TrackInfo>
        </TrackInfoWrapper>
        <ControlButtonsWrapper>
          <IconButton width={35} height={35}>
            <SkipLeft />
          </IconButton>
          <IconButton withbackground width={55} height={55}>
            <Pause />
          </IconButton>
          <IconButton width={35} height={35}>
            <SkipRight />
          </IconButton>
        </ControlButtonsWrapper>
        <TrackTimeWrapper>
          <SubText>01.23</SubText>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              backgroundColor: theme.colors.white,
              marginTop: -3,
            }}
          />
          <EndOfSong>02.30</EndOfSong>
        </TrackTimeWrapper>
        <VolumeControl>
          <IconButton width={24} height={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              backgroundColor: theme.colors.white,
              marginTop: -3,
            }}
          />
        </VolumeControl>
      </ContentWrapper>
    </Wrapper>
  );
}

Player.propTypes = {};

export default Player;
