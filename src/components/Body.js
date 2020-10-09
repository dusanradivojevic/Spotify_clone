import React from "react";
import "./Body.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useStateValue } from "../context/DataLayer";
import Song from "./Song";

function Body() {
  const [{ user, discover_weekly }, dispatch] = useStateValue();

  return (
    <div className="body">
      <div className="body__header">
        <div className="body__header__searchbar">
          <SearchOutlinedIcon />
          <input placeholder="Search for Artists, Songs or Podcasts" />
        </div>
        <div className="body__header__avatar">
          <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
          <p>{user?.display_name}</p>
        </div>
      </div>
      <div className="body__center">
        <div className="body__center__image">
          <img
            src={
              discover_weekly?.images[0].url ||
              "https://newjams-images.scdn.co/v2/discover-weekly/j2OIQgTGzXWHMKruHd7dh8zHaKvElaof-HU6_J9ouKevuqLuNf2YRrAxMHAKd8FXkHvjHs6h2PERUXZs9jkg4dOyfXTepX2KG7i2PA8QHLsCsWn1tBz8izgMLLDwcjPQhBYMpTlcJrWMfSvu09CDsQ==/MDU6MDA6NTBUNjEtMzAtMA==/default"
              // "https://www.neoarmenia.com/wp-content/uploads/generic-user-icon-19.png"
            }
            alt={user?.display_name || ""}
          />
          <p className="body__center__imageText">Your Discover Weekly</p>
        </div>
        <div className="body__center__description">
          <h5>playlist</h5>
          <h3>Discover Weekly</h3>
          <p>
            Your weekly mixtape of fresh music. Enjoy new music and deep cuts
            picked for you. Updates every Monday.
          </p>
        </div>
      </div>
      <div className="body__buttons">
        <PlayCircleFilledIcon fontSize="large" />
        <FavoriteIcon fontSize="small" />
        <MoreHorizIcon className="body__buttons__moreHoriz" />
      </div>

      <div className="body__playlist">
        <p className="body__playlist__item">#</p>
        <p className="body__playlist__item">TITLE</p>
        <p className="body__playlist__item">ALBUM</p>
        <AccessTimeIcon className="body__playlist__item" />
      </div>
      {discover_weekly?.tracks.items.map((item, index) => (
        <Song track={item.track} index={index} />
      ))}
    </div>
  );
}

export default Body;
