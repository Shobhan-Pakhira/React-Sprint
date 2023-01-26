import  square from "../../assets/SupportFeature/square.avif"
import "./SupportFeature.css"

function SupportFeature() {
  return (
   <div className="main">
<div className="main-caintainer ">
      <div className="container ">
        <div className="row">
          
          <div className="top">
            <div className="heading">
            <h1>Learning Support Features</h1>
            </div>
           
            <div className="button">
            <button className="button">Learn more</button>
          </div> 
          </div>
          
          </div>

            <div className="box-rigth pt-5 ">

            <div className="row ">
              <div className="col-md-4">
              <img src={square}/>
              <div className="sub-heading">
         <h5> Watch online video</h5>
                <div className="para">
                  <p>Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non iusto nihiaS technology</p>
             </div>
                </div>
              </div>
              <div className="col-md-4">
              <img src={square}/>
              <div className="sub-heading">
         <h5>Question and Discussion</h5>
          <div className="para">
            <p>Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non iusto nihi</p>
       </div>
             </div>
              </div>
              <div className="col-md-4">
              <img src={square}/>
              <div className="sub-heading">
         <h5> Download Study Notes</h5>
                 <div className="para">
                  <p>Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque non iusto nihistomer</p>
             </div>
             </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-box mt-5">
         </div>
        </div>
      
    

   
  );
}

export default SupportFeature;
