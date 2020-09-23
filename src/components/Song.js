import React from "react";
import "./Song.css";

function Song({ image, title, desc }) {
  return (
    <div className="song">
      <div className="song__playlists__item">
        <img src={image} alt="" />
        <div className="song__playlists__item__text">
          <p className="title">{title}</p>
          <p className="description">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Song;
