import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify_config";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue(null);

  // Retrieving and renewing access token
  useEffect(() => {
    const token_object = getTokenFromUrl();
    window.location.hash = "";
    const _token = token_object.access_token;

    // If token is replaced or obtained first time
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("hello, ", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("5E5PzbDTojETa4QMnmmerg").then((dw) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: dw,
        });

        dispatch({
          type: "SET_PLAYING_SONG",
          playing_song: {
            url: dw?.tracks.items[0].track.album.images[0].url,
            artist: dw?.tracks.items[0].track.artists[0].name,
            name: dw?.tracks.items[0].track.name,
          },
        });
      });
    }

    console.log("token >>> ", token_object);
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
