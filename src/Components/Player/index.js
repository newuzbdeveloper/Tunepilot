import { useContext, useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import PropTypes from "prop-types";
import { ContentWrapper } from "Components/Layout";
import {
  ArtistName,
  BackButton,
  ControlButtonsWrapper,
  MobileTrackRow,
  PlayerMainImage,
  TrackImage,
  TrackInfo,
  TrackInfoWrapper,
  TrackTime,
  TrackTimeWrapper,
  TrackTitle,
  VolumeControl,
  Wrapper,
} from "./styled";
import IconButton from "Components/UI/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "Components/UI/Icon";
import { theme } from "Styles/Theme";
import { formatMinAndSec } from "Utils/time";
import {
  PlayerContext,
  PlayerDispatchContext,
} from "Components/Context/PlayerContext";
import { actions } from "Components/Context/Actions";
import { useWindowSize } from "Hooks/useWindowSize";
import { breakPoints } from "Styles/BreakPoints";
import { useLocation } from "react-router-dom";

function Player() {
  const location = useLocation();
  const { track, isPlaying } = useContext(PlayerContext);
  const { width } = useWindowSize();
  const dispatch = useContext(PlayerDispatchContext);
  const audioRef = useRef();
  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.7,
    isOpen: false,
  });

  const handleSkipToNextSong = () => {
    dispatch({
      type: "NEXT_SONG",
    });
  };

  const handleReturnToPrevSong = () => {
    dispatch({
      type: "PREV_SONG",
    });
  };

  const togglePlay = () => {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
  };

  const toggleOpen = () => {
    if (width > breakPoints.lg && !playerState.isOpen) return;
    setPlayerState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
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
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else audioRef.current.pause();
  }, [audioRef, track, isPlaying]);

  useEffect(() => {
    if (playerState.isOpen) toggleOpen();
  }, [location]);

  useEffect(() => {
    if (playerState.isOpen) {
      window.scroll(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [playerState.isOpen]);

  useEffect(() => {
    if (width > breakPoints.lg && playerState.isOpen) {
      toggleOpen();
    }
  }, [width]);

  if (!track) {
    return null;
  }

  return (
    <Wrapper
      onClick={playerState.isOpen ? null : toggleOpen}
      open={playerState.isOpen}
    >
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        onLoadedMetadata={onTimeUpdate}
        onTimeUpdate={onTimeUpdate}
        hidden
        onEnded={handleSkipToNextSong}
      />
      <PlayerLayout
        track={track}
        handleReturnToPrevSong={handleReturnToPrevSong}
        togglePlay={togglePlay}
        handleSkipToNextSong={handleSkipToNextSong}
        playerState={playerState}
        isPlaying={isPlaying}
        toggleVolume={toggleVolume}
        onTrackTimeDrag={onTrackTimeDrag}
        onVolumeChange={onVolumeChange}
        toggleOpen={toggleOpen}
        width={width}
        open={playerState.isOpen}
      />
    </Wrapper>
  );
}

function PlayerLayout({
  track,
  handleReturnToPrevSong,
  togglePlay,
  handleSkipToNextSong,
  playerState,
  isPlaying,
  toggleVolume,
  onTrackTimeDrag,
  onVolumeChange,
  toggleOpen,
  width,
  open,
}) {
  if (open) {
    return (
      <ContentWrapper display="flex" direction="column" gap={14}>
        <BackButton onClick={toggleOpen}>Back</BackButton>
        <PlayerMainImage
          src={track.album?.cover_big}
          alt={`${track?.album?.title}'s cover photo`}
        />
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackInfo>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist?.name}</ArtistName>
            </TrackInfo>
          </TrackInfoWrapper>
        </MobileTrackRow>
        <TrackTimeWrapper open={1}>
          <TrackTime>{formatMinAndSec(playerState?.currentTime)}</TrackTime>
          <Slider
            min={0}
            max={playerState?.duration}
            value={playerState?.currentTime}
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
          <TrackTime last={1} grey={1}>
            {formatMinAndSec(playerState?.duration)}
          </TrackTime>
        </TrackTimeWrapper>
        <ControlButtonsWrapper open={1}>
          <IconButton width={35} height={35} onClick={handleReturnToPrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton
            onClick={togglePlay}
            withbackground
            width={55}
            height={55}
          >
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton width={35} height={35} onClick={handleSkipToNextSong}>
            <SkipRight />
          </IconButton>
        </ControlButtonsWrapper>
        <VolumeControl open={1}>
          <IconButton width={24} height={24} onClick={toggleVolume}>
            <Volume />
          </IconButton>
          <Slider
            min={0}
            max={1}
            value={playerState?.volume}
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
    );
  }
  if (width < breakPoints.lg) {
    return (
      <ContentWrapper display="flex" items="center" direction="column" gap={14}>
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackImage
              src={track.album?.cover}
              alt={`${track?.album?.title}'s cover photo`}
            />
            <TrackInfo>
              <TrackTitle>{track?.title}</TrackTitle>
              <ArtistName>{track?.artist?.name}</ArtistName>
            </TrackInfo>
          </TrackInfoWrapper>
          <ControlButtonsWrapper>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                togglePlay();
              }}
              withbackground
              width={55}
              height={55}
            >
              {isPlaying ? <Pause /> : <Play />}
            </IconButton>
          </ControlButtonsWrapper>
        </MobileTrackRow>
        <TrackTimeWrapper onClick={(event) => event.stopPropagation()}>
          <TrackTime>{formatMinAndSec(playerState?.currentTime)}</TrackTime>
          <Slider
            min={0}
            max={playerState?.duration}
            value={playerState?.currentTime}
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
          <TrackTime last={1} grey={1}>
            {formatMinAndSec(playerState?.duration)}
          </TrackTime>
        </TrackTimeWrapper>
      </ContentWrapper>
    );
  }
  return (
    <ContentWrapper display="flex" items="center">
      <TrackInfoWrapper>
        <TrackImage
          src={track.album?.cover}
          alt={`${track?.album?.title}'s cover photo`}
        />
        <TrackInfo>
          <TrackTitle>{track?.title}</TrackTitle>
          <ArtistName>{track?.artist?.name}</ArtistName>
        </TrackInfo>
      </TrackInfoWrapper>
      <ControlButtonsWrapper>
        <IconButton width={35} height={35} onClick={handleReturnToPrevSong}>
          <SkipLeft />
        </IconButton>
        <IconButton onClick={togglePlay} withbackground width={55} height={55}>
          {isPlaying ? <Pause /> : <Play />}
        </IconButton>
        <IconButton width={35} height={35} onClick={handleSkipToNextSong}>
          <SkipRight />
        </IconButton>
      </ControlButtonsWrapper>
      <TrackTimeWrapper>
        <TrackTime>{formatMinAndSec(playerState?.currentTime)}</TrackTime>
        <Slider
          min={0}
          max={playerState?.duration}
          value={playerState?.currentTime}
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
        <TrackTime grey={1}>{formatMinAndSec(playerState?.duration)}</TrackTime>
      </TrackTimeWrapper>
      <VolumeControl>
        <IconButton width={24} height={24} onClick={toggleVolume}>
          <Volume />
        </IconButton>
        <Slider
          min={0}
          max={1}
          value={playerState?.volume}
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
  );
}

PlayerLayout.propTypes = {
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
      cover_big: PropTypes.string,
    }),
  }),
  handleReturnToPrevSong: PropTypes.func,
  togglePlay: PropTypes.func,
  handleSkipToNextSong: PropTypes.func,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
  isPlaying: PropTypes.bool,
  toggleVolume: PropTypes.func,
  onTrackTimeDrag: PropTypes.func,
  onVolumeChange: PropTypes.func,
  toggleOpen: PropTypes.func,
  width: PropTypes.number,
  open: PropTypes.bool,
};
export default Player;
