import React, {useState} from 'react'
import doctor from '../assets/doctor.svg'
import engineer from '../assets/engineer.svg'
import chef from '../assets/chef.svg'
import police from '../assets/police.svg'
import {animated, useSpring} from "react-spring"

const Professions = [
    {title: 'police', image: police, description:'bla-la', icon:'icon'},
    {title: 'engineer', image: engineer, description:'bla-la', icon:'icon'},
    {title: 'chef', image: chef, description:'bla-la', icon:'icon'},
    {title: 'doctor', image: doctor, description:'bla-la', icon:'icon'},
]
const ProductDisplay = () => {
    const [currentProfession, setCurrentProfession] = useState("police");

  return (
    <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
            <h2>Select Your Profession</h2>
            <div
                className="btn-group"
                role="group"
                aria-label="Basic Example">
                    {Professions.map(profession =>(
                        <button 
                            type="button"
                            key="{professions]"
                            className={`btn btn-light border-dark ${profession.title === currentProfession?'shadow':''}`}
                            onClick={() => setCurrentProfession(profession.title)}>
                        </button>
                    ))}
                </div>
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

export default ProductDisplay