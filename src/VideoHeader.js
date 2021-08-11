import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import "./VideoHeader.css";


function VideoHeader() {
    return (
      <div className="videoHeader">
        <KeyboardBackspaceOutlinedIcon />
        <h4>Reels</h4>
        <CameraAltOutlinedIcon />
      </div>
    );
}

export default VideoHeader;