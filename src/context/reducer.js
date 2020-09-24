export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing_song: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING_SONG":
      return {
        ...state,
        playing_song: action.playing_song,
      };

    default:
      return state;
  }
};

export default reducer;
