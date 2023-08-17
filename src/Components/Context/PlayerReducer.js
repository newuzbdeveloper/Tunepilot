import { actions } from "./Actions";
import { getValueFromStorage } from "Components/HomePage/Services/localStorage";

export const initialState = {
  isPlaying: false,
  track: null,
  tracks: [],
  savedTrackIds: getValueFromStorage("savedTrackIds") || [],
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
    case actions.TOGGLE_SAVE_TRACK: {
      const indexOfTrack = state.savedTrackIds.indexOf(action.trackId);

      if (indexOfTrack >= 0) {
        const newSavedTrackIds = [...state.savedTrackIds];
        newSavedTrackIds.splice(indexOfTrack, 1);
        return {
          ...state,
          savedTrackIds: newSavedTrackIds,
        };
      }

      return {
        ...state,
        savedTrackIds: [...state.savedTrackIds, action.trackId],
      };
    }
    default:
      return state;
  }
};
