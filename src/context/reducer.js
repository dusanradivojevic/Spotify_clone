export const initialState = {
  user: null,
  token:
    "BQCgK8Ea-SYemKEk46IUYdq_2CWbJRVHmmKHtpn6aZrOCmfGyN4NvSqMxSm156EmMjXukOKDUBZmvR5RWypJNp5j_PJQCP9MN6giHl7kfcI8wLjO0FD5YIWv96J13ISN4h9trqM09U3bNtGClvUPXi-Pfjf0Edupzfar8VrKUJ46qL60",
  playlists: [],
  song_playing: false,
  item: null,
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

    default:
      return state;
  }
};

export default reducer;
