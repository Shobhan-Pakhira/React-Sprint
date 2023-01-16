import React, { useState,useEffect } from 'react'
import hero from './Hero';

function Animation() {

    const[clipPath, setClipPath] = useState("circle (5% at 5% 5%");

    useEffect(()=>{
        const handleScroll = () =>{
            let scroll = window.pageYOffset;
            let newClipPath = `circle(${50+scroll/5}% at 50% 50%)`;
            setClipPath(newClipPath);
        };
        window.addEventListener("scroll",handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div style ={{
        clipPath: clipPath,
        transition: "clip-path 1s ease-in-out",
    }}>
        <hero/>
    </div>
  )
}

export default Animation