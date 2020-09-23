import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ViewHeadlineOutlinedIcon from "@material-ui/icons/ViewHeadlineOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "../context/DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      />

      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
      <SidebarOption Icon={ViewHeadlineOutlinedIcon} title="Your Library" />

      <h3>Playlists</h3>

      <SidebarOption
        Icon={AddBoxIcon}
        fontSize="large"
        title="Create Playlist"
      />
      <SidebarOption Icon={CheckBoxIcon} fontSize="large" title="Liked Songs" />

      <div className="sidebar__playlists">
        {playlists?.items?.map((pl) => (
          <p>{pl.name}</p>
        ))}
        <p>Playlista 1</p>
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

      <SidebarOption
        Icon={GetAppOutlinedIcon}
        fontSize="large"
        title="Install App"
      />
    </div>
  );
}

export default Sidebar;
