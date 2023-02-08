import React from "react";
import "./VideoAnimation.css";
import video from "../../assets/ScrollAnimation/video.mp4";

const VideoAnation = () => {
  return (
    <div>
      <div class="wrapper">
        <input type="checkbox" />
        <div class="video">
          <video src={video} loop muted autoplay playsinline></video>
        </div>
        <div class="text">
          <span data-text="Watch the video"></span>
        </div>
      </div>
    </div>
  );
};

export default VideoAnation;
