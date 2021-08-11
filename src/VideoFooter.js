import React from "react";
import "./VideoFooter.css";

import MusicNoteIcon from "@material-ui/icons/MusicNote";

import { Button, Avatar } from "@material-ui/core";
import Ticker from "react-ticker";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar className="avatar" src={avatarSrc} />
        <p>
          {channel}•<Button>Follow</Button>
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
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <SendIcon />
          <MoreHorizIcon />
        </div>
        <div className="videoFooter__actionRight">
          <div className="videoFooter__stat">
            <FavoriteBorderOutlinedIcon />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentOutlinedIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
