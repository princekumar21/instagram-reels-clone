import React from "react";
import "./VideoFooter.css";
import ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { SvgIcon } from "@material-ui/core";
import { Button, Avatar } from "@material-ui/core";
import Ticker from "react-ticker";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar className="avatar" src={avatarSrc} />
        <p>
          {channel} •<Button>Follow</Button>
        </p>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <p className="ticker__para">• {song}</p>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__action">
        <div className="videoFooter__actionLeft">
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionRight"></div>
      </div>
    </div>
  );
}

export default VideoFooter;
