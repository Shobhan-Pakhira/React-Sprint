import square from "../../assets/SupportFeature/square.avif";
import "./SupportFeature.css";

function SupportFeature() {
  return (
    <div className="">
    <div className="body container ">
           
          <div className="row justify-content-between mb-4">
          <div className="col-md-5 ">
            <h1>Learning <br/> Support Features</h1>
          </div>
          <div className="col-md-2 mt-5">
            <button className="btn btn-primary btn-lg rounded-pill w-100 ">
              Learn more
            </button>
          </div>
        </div>
        <div className=" pt-5 ">
        <div className="row ">
          <div className="col-md-4 mb-5">
            <img className="w-50" src={square}  alt='' />

            <h5 className="mt-5"> Watch online video</h5>

            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihiaS technology
            </p>
          </div>
          <div className="col-md-4">
            <img className="w-50" src={square} alt=''  />
            <h5 className="mt-5">Question and Discussion</h5>
            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihi
            </p>
          </div>

          <div className="col-md-4">
            <img className="w-50" src={square} alt=''  />

            <h5 className="mt-5"> Download Study Notes</h5>

            <p>
              Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non
              iusto nihistomer
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SupportFeature;
