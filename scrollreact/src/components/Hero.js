import React from 'react'
import video from '../assets/video.mp4'
import Background from '../assets/logo.svg'

const hero = () => {
  return (
    <div class="front-page">
        <div className="intro-text">
          <h1 className="title">Learn to play Guitar.</h1>
          <h2 className="sub-title">
            Join today and find the right instructor for you.
          </h2>
        </div>
        <img className="music-note" src={Background} alt=""></img>
        <div className="blend"></div>
        <video src={video} autoplay="true" loop="true"></video>
      </div>
  )
}

export default hero