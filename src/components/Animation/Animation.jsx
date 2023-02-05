


import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import mountainsbehind from "../../assets/Animation/mountainsbehind.png";
import mountainsfront from "../../assets/Animation/mountainsfront.png";
import stars from "../../assets/Animation/stars.png";
import { animated, useSpring } from 'react-spring'


const AnimatedHeader = animated(({ style, children }) => {
  return <h1 style={{ ...style, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{children}</h1>;
});

const Animation = () => {
  const ref = useRef();
  const [parallaxScroll, setParallaxScroll] = useState(0);
  const animationProps = useSpring({
    opacity: parallaxScroll >= 1 ? 0 : 1,
  });

  const handleScroll = (event) => {
    setParallaxScroll(event.target.scrollTop / event.target.offsetHeight);
  };

  return (
    <>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer offset={0} speed={1.5}>
          <img
            className="bg-dark w-100 bg-secondary bg-gradient " alt="" src={mountainsbehind} />
                      <AnimatedHeader style={animationProps}  onScroll={handleScroll}>
                        <div className="text-center text-light"> Your Text Header</div></AnimatedHeader>
         
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0} >
          <img className="w-100" alt="" src={stars} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          {/* <AnimatedHeader style={animationProps}  onScroll={handleScroll}><div className="text-center text-light"> Your Text Header</div></AnimatedHeader> */}
          <img className="w-100" alt="" src={mountainsfront} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} >
          <div className="container">
            <h1>Your text header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim  Excepteur sint occaecat cupidatat non proident
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  );
};

export default Animation;

