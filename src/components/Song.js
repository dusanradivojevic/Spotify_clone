import React from "react";
import { useStateValue } from "../context/DataLayer";
import Format from "format-duration";
import "./Song.css";

function Song({ track, index }) {
  const [{}, dispatch] = useStateValue();

  const changeSong = () => {
    dispatch({
      type: "SET_PLAYING_SONG",
      playing_song: {
        url: track.album.images[0].url,
        artist: track.artists[0].name,
        name: track.name,
      },
    });
  };

  return (
    <div className="song" onClick={changeSong}>
      <p className="song_item">{index + 1}</p>
      <div className="song_text song_item">
        <img src={track.album.images[0].url} alt="" className="song_item" />
        <div className="song_text_text">
          <p className="title">{track.name}</p>
          <p className="description">
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <p className="song_item">{track.album.name}</p>
      <p className="song_item">{Format(track.duration_ms)}</p>
    </div>
  );
}

export default Song;
