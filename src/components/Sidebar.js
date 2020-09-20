import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ViewHeadlineOutlinedIcon from "@material-ui/icons/ViewHeadlineOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      />

      <div className="sidebar__option">
        <HomeOutlinedIcon />
        <h5>Home</h5>
      </div>
      <div className="sidebar__option">
        <SearchOutlinedIcon />
        <h5>Search</h5>
      </div>
      <div className="sidebar__option">
        <ViewHeadlineOutlinedIcon />
        <h5>Your Library</h5>
      </div>

      <h3>Playlists</h3>

      <div className="sidebar__option sidebar__custom">
        <AddBoxIcon fontSize="large" />
        <h5>Create Playlist</h5>
      </div>
      <div className="sidebar__option sidebar__custom">
        <CheckBoxIcon fontSize="large" color="secondary" />
        <h5>Liked Songs</h5>
      </div>

      <div className="sidebar__playlists">
        <p>Playlista </p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
        <p>Playlista 1</p>
      </div>

      <div className="sidebar__option">
        <GetAppOutlinedIcon />
        <h5>Install App</h5>
      </div>
    </div>
  );
}

export default Sidebar;
