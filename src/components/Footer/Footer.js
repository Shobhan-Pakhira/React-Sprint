import React from "react";
import "./Footer.css";
import heartlogo from "../../assets/Footer/heartlogo.avif";

const Footer = () => {
  return (
    <div className="background">
      <div className=" top-contanier ">
        <h1 className="text-light pt-4">
          The values that hold us,
          <br /> true and to account{" "}
        </h1>

        <div className="row justify-content-between  mt-5 pb-5">
          <div className="col-md-3  ">
          
            <div className="row ">
              <div className="col-md-1 mr-1">
                <img className="heartlogo " src={heartlogo} alt="" />
              </div>
              <div className="col-md-3">
                <h5 className="text-light"> Simplicity</h5>
              </div>

              <div className="para">
                <p className="text-light mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="row ">
              <div className="col-md-1">
                <img className="heartlogo" src={heartlogo} alt="" />
              </div>
              <div className="col-md-4 w-75">
                <h5 className="text-light"> Social Good</h5>
              </div>
              <div className="para">
                <p className="text-light mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="row ">
              <div className="col-md-1">
                <img className="heartlogo" src={heartlogo} alt="" />
              </div>
              <div className="col-md-3">
                <h5 className="text-light"> Trust</h5>
              </div>
              <div className="para">
                <p className="text-light mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="square">
          <div className="row">
            <div className="col-md-8">
              {/* <img>logo</img> */}
              <h2 className="text-light">
                Ready for a simple future ?
                <h2 className="text-dark"> Let's get started!</h2>
              </h2>
            </div>

            <div className="col-md-4 d-flex justify-content-end mt-3 rounded">
              <button className="button btn btn-dark btn-sm">
                <p> Get started</p>
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row justify-content-around text-center text-md-start mt-5 pt-3">
            <div className="col-md-2">
              <span className="text-light"> &copy; 2018</span>
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li className="fw-bold my-2 text-light">Customers</li>
                <li className="text-decoration-none text-secondary">Buyer</li>
                <li className="text-decoration-none text-secondary">
                  Supplier
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li className="fw-bold my-2 text-light">Company</li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    About us
                  </a>
                </li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    Career
                  </a>
                </li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled">
                <li className="fw-bold my-2 text-light">Further Information</li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a herf="  " className="text-decoration-none text-secondary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <li className="fw-bold my-2 list-unstyled text-white">
                Follow us
              </li>
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    FA
                  </a>
                </li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    FA
                  </a>
                </li>
                <li>
                  <a herf="#" className="text-decoration-none text-secondary">
                    FA
                  </a>
                </li>
              </ul>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
