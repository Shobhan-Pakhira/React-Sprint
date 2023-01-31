import React,{useRef} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Animation.css'
// import mountainbg from "../../assets/Animation/mountainbg.jpg"
// import mountain1 from "../../assets/Animation/mountain1.png"
// import mountain2 from "../../assets/Animation/mountain2.png"
import mountainsbehind from "../../assets/Animation/mountainsbehind.png"
import mountainsfront from "../../assets/Animation/mountainsfront.png"
import moon from "../../assets/Animation/moon.png"
import stars from "../../assets/Animation/stars.png"


const Animation = () => {
  const ref = useRef()
  return (
    <Parallax pages={3} ref={ref} className="animation">
      <ParallaxLayer offset={0} speed={1.5}>
       
        <img className='bg-dark w-100 bg-secondary bg-gradient' src={mountainsbehind}/>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2.0} >
      <img className='w-75' src={stars}/>
       
      </ParallaxLayer>
{/* 
       <ParallaxLayer offset={0} speed={2.0} >
       <img className='w-75' src={moon}/>
        
      </ParallaxLayer> */}

      <ParallaxLayer offset={0} speed={2.0} >
       <img className='w-100' src={mountainsfront}/>
        
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
