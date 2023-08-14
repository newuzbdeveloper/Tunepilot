import { actions } from "./Actions";

export const initialState = {
  isPlaying: false,
  track: null,
  tracks: [],
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TRACK_DATA: {
      return {
        ...state,
        isPlaying: action.isPlaying,
        track: action.track,
        tracks: action.tracks,
      };
    }
    case actions.TOGGLE_PLAY: {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }
    case actions.NEXT_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongId = state.tracks.findIndex(
        (track) => track.id === state.track.id,
      );
      const nextSongIndex =
        currentSongId === state.tracks.length - 1 ? 0 : currentSongId + 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
    case actions.PREV_SONG: {
      if (!state.tracks || !state.track) return state;
      const currentSongId = state.tracks.findIndex(
        (track) => track.id === state.track.id,
      );
      const nextSongIndex =
        currentSongId === 0 ? state.tracks.length - 1 : currentSongId - 1;
      return {
        ...state,
        track: state.tracks[nextSongIndex],
      };
    }
  }
};
