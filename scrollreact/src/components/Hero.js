import React, {useState, useEffect} from 'react'
import video from '../assets/video.mp4'
import Background from '../assets/logo.svg'

const Hero = () => {
  const[clipPath, setClipPath] = useState(5);

  useEffect(()=>{
      const handleScroll = () =>{
          let scroll = window.pageYOffset;
          const clip = 5 + (scroll / 245) * 100
          setClipPath(clip);
      };
      window.addEventListener("scroll",handleScroll);
      return() => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <div class="front-page" style={{clipPath: `circle(${clipPath}%)`}}>
        <div className="intro-text" style={{display: clipPath<50?"none" : "block"}}>
          <h1 className="title">Learn to play Guitar.</h1>
          <h2 className="sub-title">
            Join today and find the right instructor for you.
          </h2>
        </div>
        <img className="music-note" style={{display: clipPath>=50?"none" : "block"}} src={Background} alt=""></img>
        <div className="blend"></div>
        <video src={video} autoplay="true" loop="true"></video>
      </div>
  )
}

export default Hero