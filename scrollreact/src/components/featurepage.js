import React from 'react'
import illustration from '../assets/illustrationMan.svg'

const FeaturePage = () => {
  return (
    <div className='content-wrapper'>
        <div className='hero-div'>
            <div className='side-wrapper'>
                <h1 className='hero-content'>Gain Skills When & Where You Want For Your Study or Career...</h1>
                <button className='hero-button'>Explore Gigs</button>
            </div>
            <img className='illustration-svg' src={illustration} alt='illustration'/>
        </div>
        <div className='sub-card'>
            <div className='subcard'>1</div>
            <div className='subcard'>1</div>
            <div className='subcard'>1</div>
            <div className='subcard'>1</div>
        </div>
    </div>
  )
}

export default FeaturePage