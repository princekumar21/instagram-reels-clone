import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import "./VideoHeader.css";


function VideoHeader() {
    return (
      <div className="videoHeader">
        <ChevronLeftIcon />
        <h4>Reels</h4>
        <CameraAltIcon />
      </div>
    );
}

export default VideoHeader;