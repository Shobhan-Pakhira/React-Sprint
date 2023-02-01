import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import './Animation.css'
// import mountainbg from "../../assets/Animation/mountainbg.jpg"
// import mountain1 from "../../assets/Animation/mountain1.png"
// import mountain2 from "../../assets/Animation/mountain2.png"
import mountainsbehind from "../../assets/Animation/mountainsbehind.png";
import mountainsfront from "../../assets/Animation/mountainsfront.png";
// import moon from "../../assets/Animation/moon.png"
import stars from "../../assets/Animation/stars.png";

const Animation = () => {
  const ref = useRef();
  return (
    <>
      <Parallax pages={2} ref={ref} className="animation">
        <ParallaxLayer offset={0} speed={1.5}>
          <img
            className="bg-dark w-100 bg-secondary bg-gradient "
            src={mountainsbehind}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          <img className="w-100" src={stars} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          <img className="w-100" src={mountainsfront} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <div className="container">
            <h1>Your text header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volupta te velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mol lit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim ve niam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate ve lit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

      <ParallaxLayer sticky={{ start: 1, end: 2 }} /> 

      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>  */}
      </Parallax>
    </>
  );
};

export default Animation;
