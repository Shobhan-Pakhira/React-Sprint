import React, {useState} from 'react'
import doctor from '../assets/doctor.svg'
import engineer from '../assets/engineer.svg'
import chef from '../assets/chef.svg'
import police from '../assets/police.svg'
import {animated, useSpring} from "react-spring"
import cart from '../assets/SecondPage/cart.svg'
import arrow from '../assets/CardClick/arrow.svg'

 const SecondPage = () => {
  const professions = [
    {title:'police',image: police,description:'Connect buyers with merchants tailored to them',icon:cart},
    {title:'chef',image: chef,description:'Connect buyers with merchants tailored to them',icon:cart},
    {title:'doctor',image: doctor,description:'Connect buyers with merchants tailored to them',icon:cart},
    {title:'engineer',image: engineer,description:'Connect buyers with merchants tailored to them',icon:arrow}
  ];
  const [myProfession, setMyProfession] = useState("chef");
  
  return (
    <div className="second-page">
      {/* <div className="heading-text">
        <h1>Powerful, flexible, scalable digital experiences for your business</h1>
      </div> */}

        <div role="group" aria-label="Basic Example">
        {professions.map((profession,idx) =>(
          <div key={idx} onClick={()=> setMyProfession(profession.title)}>
                  <div class="card-btn-selected">
                    <div className='card-btn-icon' style={myProfession === profession.title ? {
                      backgroundColor:'red'
                    }: {}}>
                        <img className='cart' src={profession.icon} alt='cart-icn'/>
                    </div>
                    <div className='card-btn-content'>
                        <h1 className='lead-content'>{profession.title.toUpperCase()}</h1>
                        {myProfession === profession.title &&
                        <>
                          <p className='support-content'>{profession.description}</p>
                          <div className='btn-div'>
                          <button className='link-btn'>B2C Solutions</button>
                          <img src={arrow} className='arrow' alt='arrow'/>
                          </div>
                          </>
                        }
                    </div>
                </div>
                </div>
        ))} 
        </div>

        <div className="images">
          <p>
            {myProfession === "police" && (
              <ProfessionImage src={police} />
            )}
            {myProfession === "chef" && (
              <ProfessionImage src={chef} />
            )}
            {myProfession === "doctor" &&(
              <ProfessionImage src={doctor} />
            )}
            {myProfession === "engineer" &&(
              <ProfessionImage src={engineer} />
            )}
          </p>
        </div>
    </div>
  )}

  const ProfessionImage = ({ src }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.img
            src={src}
            alt=""
            style={{ width: "400px", height: "400px", ...props }}/>
    )};

export default SecondPage

