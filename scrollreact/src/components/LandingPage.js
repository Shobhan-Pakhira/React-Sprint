import React from 'react'
import arrow from '../assets/arrow-down.svg'
import hand from '../assets/hand.svg'
import background from '..'

const LandingPage = () => {
  return (
    <>
    <div className='landing-page' style={{backgroundImage:`url(${background})`, backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
      <div className='hero-content'>
        <h1 className='hero-text'>Become Fluent in <br /> Any Language With <br /> Anya Wareeson</h1>
        <p className='aux-text'>Choose from over 10000 teachers and excel your favourite language.</p>
        <div className='btn-group'>
          <button className='btn'> Get Started </button>
          <button className='btn'>Learn More</button>
        </div>
        <div className='scroll-btn'>
          <img className='arrow-down' src={arrow} alt='arrow'/>
          <p>Scroll to Bottom</p>
        </div>
      </div>
      <div className='graphic-div'>Image
      </div>
    </div>
    <div className='footer'>
      <div className='left-group'>
        <div className='icn-group'>
          <img className='hand-icon' src={hand} alt='hand' />
        </div>
        <p className='aux-text-footer'>10000+ teachers <br/> for any language you love</p>
      </div>

    </div>
    </>
  )
}

export default LandingPage