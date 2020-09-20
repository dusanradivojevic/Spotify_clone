import React from "react";
import "./Body.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body() {
  return (
    <div className="body">
      <div className="body__header">
        <div className="body__header__searchbar">
          <SearchOutlinedIcon />
          <input placeholder="Search for Artists, Songs or Podcasts" />
        </div>
        <div className="body__header__avatar">
          <Avatar alt="" src="" />
          <p>Dusan</p>
        </div>
      </div>
      <div className="body__center">
        <div className="body__center__image">
          <img
            alt=""
            src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
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
        <div className="body__playlists__item">
          <img
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
          <div className="body__playlists__item__text">
            <p className="title">Capturing Wind</p>
            <p className="description">Jeff Bilma - Capturing Wild</p>
          </div>
        </div>

        <div className="body__playlists__item">
          <img
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt=""
          />
          <div className="body__playlists__item__text">
            <p className="title">Capturing Wind</p>
            <p className="description">Jeff Bilma - Capturing Wild</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
