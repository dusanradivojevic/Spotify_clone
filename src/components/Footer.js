import React from "react";
import "./Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid } from "@material-ui/core";
import { useStateValue } from "../context/DataLayer";

function Footer() {
  const [{ playing_song }, dispatch] = useStateValue();

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={
            playing_song?.url ||
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          }
          alt=""
        />
        <div className="footer__songInfo">
          <h4>{playing_song?.name || "Yeah!"}</h4>
          <p>{playing_song?.artist || "Usher"}</p>
        </div>
        <FavoriteBorderIcon className="footer__icon" />
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__icon" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
