import React, {useState} from 'react'
// import SampleImage1 from '../assets/sample1.jpg'

 const SecondPage = () => {
  const [currentImage, setCurrentImage] = useState('image1.jpg');
  const [currentCSS, setCurrentCSS] = useState({color: 'blue'});

  const handleClick = () => {
    setCurrentImage(currentImage === 'image1.jpg' ? 'image2.jpg' : 'image1.jpg');
    setCurrentCSS(currentCSS === {color: 'blue'} ? {color: 'red'} : {color: 'blue'});
  }

  return (
    <div className="second-page">
        <div className="card-wrapper">
          <div className="cards" onClick={handleClick}>
            <h3 className="header-text">Product Discovery</h3>
          </div>
          <div className="cards"></div>
          <div className="cards"></div>
          <div className="cards"></div>
        </div>
        <div className="images">
          <img className="sample-images" src="" alt="" />
        </div>
      </div>
  )
}

export default SecondPage