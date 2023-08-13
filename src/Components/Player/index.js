import Slider from "rc-slider";
import { ContentWrapper } from "Components/Layout";
import {
  ArtistName,
  ControlButtonsWrapper,
  TrackImage,
  TrackInfo,
  TrackInfoWrapper,
  TrackTime,
  TrackTimeWrapper,
  VolumeControl,
  Wrapper,
} from "./styled";
import IconButton from "Components/UI/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "Components/UI/Icon";
import { Text } from "Components/UI/Typography";
import { theme } from "Styles/Theme";
import { useEffect, useRef, useState } from "react";
import { formatMinAndSec } from "Utils/time";

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
  const audioRef = useRef();
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.7,
  });

  const togglePlay = () => {
    setPlayerState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const onTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = newTime;
    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };

  const onVolumeChange = (newVolume) => {
    if (!audioRef.current) return;
    audioRef.current.volume = newVolume;
    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const toggleVolume = (newVolume) => {
    newVolume = playerState.volume > 0 ? 0 : 1;
    onVolumeChange(newVolume);
  };
  useEffect(() => {
    if (!audioRef?.current) return;
    if (playerState.isPlaying) {
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [audioRef, track, playerState.isPlaying]);

  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <audio
          ref={audioRef}
          src={track.preview}
          controls
          onLoadedMetadata={onTimeUpdate}
          onTimeUpdate={onTimeUpdate}
          hidden
        />
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
          <IconButton
            onClick={togglePlay}
            withbackground
            width={55}
            height={55}
          >
            {playerState.isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton width={35} height={35}>
            <SkipRight />
          </IconButton>
        </ControlButtonsWrapper>
        <TrackTimeWrapper>
          <TrackTime>{formatMinAndSec(playerState.currentTime)}</TrackTime>
          <Slider
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            step={0.2}
            onChange={onTrackTimeDrag}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              backgroundColor: theme.colors.white,
              marginTop: -3,
            }}
          />
          <TrackTime>{formatMinAndSec(playerState.duration)}</TrackTime>
        </TrackTimeWrapper>
        <VolumeControl>
          <IconButton width={24} height={24} onClick={toggleVolume}>
            <Volume />
          </IconButton>
          <Slider
            min={0}
            max={1}
            value={playerState.volume}
            step={0.01}
            onChange={onVolumeChange}
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
