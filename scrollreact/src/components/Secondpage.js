import React, {useState} from 'react'
import doctor from '../assets/doctor.svg'
import engineer from '../assets/engineer.svg'
import chef from '../assets/chef.svg'
import police from '../assets/police.svg'
import {animated, useSpring} from "react-spring"

 const SecondPage = () => {
  const professions = ["police", "chef", "doctor", "engineer"];
  const [myProfession, setMyProfession] = useState("chef");

  return (
    <div className="second-page">
        <div className="card-wrapper" role="group" aria-label="Basic Example">
        {professions.map(profession =>(
          <div key={profession} className="card" onClick={()=> setMyProfession(profession)}>
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


{/* <h3 className="header-text">Product Discovery</h3> */}

export default SecondPage

