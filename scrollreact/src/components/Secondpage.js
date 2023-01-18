import React, {useState} from 'react'
import doctor from '../assets/doctor.svg'
import engineer from '../assets/engineer.svg'
import chef from '../assets/chef.svg'
import police from '../assets/police.svg'
import {animated, useSpring} from "react-spring"

 const SecondPage = () => {
  const professions = ["police", "chef", "doctor", "engineer"];
  const [myProfession, setMyProfession] = useState("chef");

  const currentStyle = {style:{width: '550px',height: '80px', background: 'rgb(116, 116, 116)'}}
  const newCSS = [{style: { transform: 'scaleY(1.5)', background: '#f1f1f1', opacity: '0.5', margin: '4%'}}]
  const [currentCSS, setNewCSS] = useState(currentStyle);
  
  return (
    <div className="second-page">
      {/* <div className="heading-text">
        <h1>Powerful, flexible, scalable digital experiences for your business</h1>
      </div> */}

        <div className="card-wrapper" role="group" aria-label="Basic Example">
        {professions.map(profession =>(
          <div key={profession} className="card" onClick={()=> {setMyProfession(profession); setNewCSS(newCSS);}}>
                {profession.toLocaleUpperCase()}
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
            style={{ width: "400px", height: "400px", ...props }}
        />
    );
};

export default SecondPage

