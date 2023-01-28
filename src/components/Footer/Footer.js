import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="uper-headin">
        <h3 className="mt-5">
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

      <div className="bg-success p-2 text-dark bg-opacity-25 p-5 mt-5">
        <div className="row">
          <div className="col-md-8">
            {/* <img>logo</img> */}
            <h3>
              {" "}
              Ready for a simple future ?
              <br /> Let's get started!
            </h3>
          </div>

          <div className="col-md-4  d-flex justify-content-end">
            <button className="rounded w-50  ">
              <b> Get started</b>
            </button>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="footer text-start">
        <div className="row mt-5">
          <div className="col-md-2">
            <span className="text-dark"> &copy; 2018</span>
          </div>

          <div className="col-md-2">
            <h4 className="text-dark">Customer</h4>
            <ul>
              <li>
                <a href="_#" className="text-decoration-none">Buyer</a>
              </li>

              <li>
                <a href="_#" className="text-decoration-none">Supplier</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <h4 className="text-dark">Company</h4>

            <ul>
              <li>
                <a href="#_" className="text-decoration-none">about us</a>
              </li>
              <li>
                <a href="#_"className="text-decoration-none">Career</a>
              </li>
              <li>
                <a href="#_" className="text-decoration-none">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 ">
            <h5 className="text-dark">Further information</h5>
            <ul className="list-group">
              <li className="list-group-item"> 
                <a href="#_"className="text-decoration-none border border-white">Terms and conditions</a>
              </li>
              <li>
                <a href="#_"className="text-decoration-none">Privacy Policy</a>
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