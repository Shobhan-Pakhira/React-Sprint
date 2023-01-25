import React from 'react'
import image1 from '../assets/CardClick/1.png'
import image2 from '../assets/CardClick/2.png'
import image3 from '../assets/CardClick/3.png'
import image4 from '../assets/CardClick/4.png'
import image5 from '../assets/CardClick/5.png'
import cart from '../assets/CardClick/cart.svg'
import arrow from '../assets/CardClick/arrow.svg'

const CardClick = () => {
  return (
    <div className='wrapper-class'>
        <div className='card-holder'>
            <div class="card-btn-selected">
                <div className='card-btn-icon'>
                    <img className='cart' src={cart} alt='cart-icn'/>
                </div>
                <div className='card-btn-content'>
                    <h1 className='lead-content'>Product Discovery</h1>
                    <p className='support-content'>Connect buyers with merchants tailored to them</p>
                    <div className='btn-div'>
                    <button className='link-btn'>B2C Solutions</button>
                    <img src={arrow} className='arrow' alt='arrow'/>
                    </div>
                </div>
            </div>
            <div class="card-btn-unselected">
                
            </div>
            <div class="card-btn-unselected"></div>
            <div class="card-btn-unselected"></div>
        </div>
        <div className='image-holder'>
            <img className='image' src={image1} alt='image1'/>
            <img className='image' src={image2} alt='image2'/>
            <img className='image' src={image3} alt='image3'/>
            <img className='image' src={image4} alt='image4'/>
            <img className='image' src={image5} alt='image5'/>
        </div>
    </div>
  )
}

export default CardClick