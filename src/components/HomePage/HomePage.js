import React from "react";
import IntelLogo from "../../assets/HomePage/IntelLogo.png";
import HexagoneShape from "../../assets/HomePage/HexagoneShape.png";
import "./HomePage.css"
const HomePage = () => {
  return (
   
    <div className="container-fluid">
       <div className="background">
      <div className="row justify-content-between ">
         
        <div className="d-flex p-4 mt-5">
          <div className="col-md-4 ">
        <img className="hex-img img-fluid p-4" src={HexagoneShape} alt=''/>
        </div>

          <div className="col-md-8 mt-5 ">

          <div className="row  mx-5 pt-5 ">
            <div className="col-md-4">
              <h3>100%</h3>
              <p className="text-secondary">SaaS technologya</p>
            </div>
            <div className="col-md-4">
              <h3>100,000</h3>

              <p className="text-secondary">Endpoints per tenant</p>
            </div>
            <div className="col-md-4">
              <h3>100+</h3>

              <p className="text-secondary">Threat intel sources</p>
            </div>
          </div>

          <div className="row  mx-5 pt-5 ">
            <div className="col-md-4">
              <h3>124</h3>
              <p className="text-secondary">Active projects</p>
            </div>
            <div className="col-md-4">
              <h3>1,400+</h3>

              <p className="text-secondary">Built in querie</p>
            </div>
            <div className="col-md-4">
              <h3>200+</h3>

              <p className="text-secondary">Costomers</p>
            </div>
          </div>
          </div>
          </div>

         
        <div className="row-logo row px-5 m-5 justify-content-center ">
          <div className="col-2 ">
            <img className=" p-1 w-50" src={IntelLogo} alt='_' />
          </div>
          <div className="col-2">
            <img className=" p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className=" p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className=" p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className=" p-1 w-50" src={IntelLogo} alt=''/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
