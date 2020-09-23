import React from "react";
import "./Body.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
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
              "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
            }
            alt={user?.display_name}
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
        <MoreHorizIcon />
      </div>
      <div className="body__playlists">
        {discover_weekly?.tracks.items.map((item) => {
          let description =
            item.track.artists.map((artist) => artist.name).join(", ") +
            "- " +
            item.track.album.name;

          return (
            <Song
              title={item.track.name}
              desc={description}
              image={item.track.album.images[0].url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
