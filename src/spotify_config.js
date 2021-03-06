export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone2-8d3aa.web.app";

const clientId = "9779cc2b262944c4902458bb6100db20"; // Public key

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // location -> url
  // hash -> # symbol in the url
  return window.location.hash
    .substring(1) // Removing the hash sign
    .split("&")
    .reduce((initialValue, item) => {
      let parts = item.split("=");
      initialValue[parts[0]] = parts[1]; // decodeURIComponent

      return initialValue;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
