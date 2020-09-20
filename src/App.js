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
