import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-container">
      <div className="uper-heading">
        <h3>
          The values that hold us,
          <br /> true and to account{" "}
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5> Simplicity</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihiaS technology
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5>Social Good</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihi
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5> trust</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihistomer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="square-template mt-5">
        <div className="squar-heading">
          <div className="top-heading">
            {/* <img>logo</img> */}
            <h3>Ready for a simple future ?</h3>
          </div>
          <div className="bottom-heading">
            <h3>Let's get started!</h3>
          </div>
        </div>
        <div className="square-button">
          <button>Get started</button>
        </div>
      </div>

      {/* footer */}

      <div className="footer text-start">
        <div className="row mt-5">
          <div className="col-md-2">
            {/* <img src="" alt="" /> */}
            <span className="text-dark"> &copy; 2018</span>
          </div>

          <div className="col-md-2">
            <h4 className="text-dark">Customer</h4>
            <ul>
              <li>
                <a href="_#">Buyer</a>
              </li>

              <li>
                <a href="_#">Supplier</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <h4 className="text-dark">Company</h4>

            <ul>
              <li>
                <a href="#_">about us</a>
              </li>
              <li>
                <a href="#_">Career</a>
              </li>
              <li>
                <a href="#_">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 ">
            <h5 className="text-dark">Further information</h5>
            <ul>
              <li>
                {" "}
                <a href="#_">Terms and conditions</a>
              </li>
              <li>
                <a href="#_">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 ">
            <h4 className="text-dark">Follow us</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
