import React,{useRef} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Animation.css'
import mountainbg from "../../assets/Animation/mountainbg.jpg"
import mountain1 from "../../assets/Animation/mountain1.png"
import mountain2 from "../../assets/Animation/mountain2.png"

const Animation = () => {
  const ref = useRef()
  return (
    <Parallax pages={3} ref={ref} className="animation">
      <ParallaxLayer offset={0} speed={1.5}>
        {/* <div className='mountainbg'></div> */}
        <img src={mountainbg}/>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2.0} >
       
        {/* <div className='mountain1'></div> */}
      </ParallaxLayer>

       <ParallaxLayer offset={0} speed={2.0} >
       <img src={mountain1}/>
        {/* <div className='mountain1'></div> */}
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2.0}>
      <img src={mountain2}/>
        {/* <div className='mountain2'></div> */}
      </ParallaxLayer> 

      {/* <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

      <ParallaxLayer sticky={{ start: 1, end: 2 }} /> 

      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>  */}
    </Parallax>
  )
}

export default Animation
