import React, {useState} from 'react'
import doctor from '../assets/doctor.svg'
import engineer from '../assets/engineer.svg'
import chef from '../assets/chef.svg'
import police from '../assets/police.svg'
import {animated, useSpring} from "react-spring"

const ShowHide = () => {
    const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("chef");
  return (
    <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myProfession}</p>
                    <p>
                        {myProfession === "police" && (
                            <ProfessionImage src={police} />
                        )}
                        {myProfession === "chef" && (
                            <ProfessionImage src={chef} />
                        )}
                        {myProfession === "doctor" && (
                            <ProfessionImage src={doctor} />
                        )}
                        {myProfession === "engineer" && (
                            <ProfessionImage src={engineer} />
                        )}
                    </p>
                </div>
            </div>
  )
}

const ProfessionImage = ({ src }) => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.img
            src={src}
            alt=""
            style={{ width: "250px", height: "250px", ...props }}
        />
    );
};

export default ShowHide