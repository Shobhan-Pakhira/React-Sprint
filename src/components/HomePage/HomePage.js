import React from "react";
import "./HomePage.css";
import IntelLogo from "../../assests/HomePage/IntelLogo.png"
import HexagoneShape from "../../assests/HomePage/HexagoneShape.png";

const HomePage = () => {
  return (
    <div className="background">
      <div className="">
        {/* <img className="background-image" src={HomePagebackground}/> */}
      
      <div className="Container-top">
        
        <img className="hex-img text-center" src={HexagoneShape} />
        
        <div className="numbers" />
        <div className="box-rigth pt-5">
          <div className="row">
            <div className="col-4 ">
              <h2>100%</h2>
              <p>SaaS technology</p>
            </div>
            <div className="col-4 ">
              <h2>100+</h2>
              <p>Threat intel sources</p>
            </div>
            <div className="col-4">
              <h2>100+</h2>
              <p>Threat intel sources</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-4">
              <h2>100%</h2>
              <p>SaaS technology</p>
            </div>
            <div className="col-4 ">
              <h2>1,400+</h2>
              <p>Buit in queries</p>
            </div>
            <div className="col-4">
              <h2>200+</h2>
              <p>Costomer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-box mt-5">
      <div className="logo-img">
        <div className="row">
          <div className="col-2">
            <img className="logo" src={IntelLogo} />
          </div>
          <div className="col-2">
            <img className="logo" src={IntelLogo} />
          </div>
          <div className="col-2">
            <img  className="logo"src={IntelLogo} />
          </div>
          <div className="col-2">
            <img className="logo" src={IntelLogo} />
          </div>
          <div className="col-2">
            <img className="logo" src={IntelLogo} />
          </div>
          <div className="col-2">
            <img className="logo" src={IntelLogo} />
          </div>
          </div>
         </div>
        </div>
      </div>
      </div>
  );
};

export default HomePage;
