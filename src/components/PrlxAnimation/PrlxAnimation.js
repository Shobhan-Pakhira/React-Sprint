
import React, { useState, useEffect } from "react";
import bg from "../../assets/pelxAnimation/bg.webp";
import { animated } from 'react-spring'
// import "./Animation.css";

const AnimatedHeader = animated(({ style, children }) => {
  return <h1 style={{ ...style, position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>{children}</h1>;
});

function Animation() 
{
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [headerBgSize, setHeaderBgSize] = useState("200%");

  useEffect(() => {
    const handleScroll = () => {
      setHeaderOpacity(1 - window.pageYOffset / 800);
      setHeaderBgSize(`${160 - window.pageYOffset / 20}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="header" className="background p-4" >
        <img style={{  opacity: headerOpacity  }} className="w-100" src={bg} alt="" />
        <AnimatedHeader style={{ opacity: headerOpacity }}><div className="text-center text-light font-weight-bold">Your Text Header</div>
        <button className="btn btn-dark btn-lg rounded-pill w-50 m-5 ">
              Learn more
            </button>
        </AnimatedHeader>
      </div>
      <div className="container p-5">
        <h1 className="text-center bg-blue">Head</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio
        vel quidem minima, aliquid similique corrupti deleniti id laboriosam
        reiciendis. Ducimus natus nesciunt recusandae similique voluptates nemo
        voluptatibus odio. Esse? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti quisquam repellendus perspiciatis? Ullam
        deleniti, aliquam quo mollitia quam voluptatum dolor numquam, asperiores
        libero soluta harum deserunt temporibus qui ipsam reiciendis. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Qui suscipit eius
        minus, corrupti fugiat beatae non harum odit debitis tenetur aperiam,
        veniam corporis sint ut natus eligendi laudantium cum asperiores. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Id ea molestias
        excepturi voluptate non, nisi, architecto consectetur, error officia
        quasi voluptatum? Voluptas et repellat sunt, ad quaerat cumque doloribus
        asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Soluta fugit totam, tenetur quaerat inventore vero, officia vel cum
        explicabo laboriosam nulla dicta saepe qui fugiat eligendi, ipsam nihil!
        Porro, mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Officia impedit, amet facilis ut incidunt culpa repudiandae dolor
        veniam illo aliquam blanditiis nostrum iusto laboriosam exercitationem
        mollitia excepturi consequatur? Odit, laboriosam? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Pariatur quo debitis voluptatum
        perferendis excepturi, totam ipsam, vero voluptate et quam omnis
        voluptatem enim in consequuntur dolores dolorum unde? Nostrum, Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Architecto harum
        corrupti nihil accusamus nulla voluptatem expedita corporis quisquam
        minima natus error amet, laborum esse rem perferendis libero possimus
        qui debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Cumque ex maiores natus, suscipit repudiandae omnis harum delectus
        dolore odio, ratione aspernatur ab. Eos, officia et. Consequatur nihil
        reiciendis officia Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quibusdam vitae voluptas incidunt saepe itaque voluptates harum at
        possimus nemo, molestias ullam cumque laborum non totam, similique
        officia, magni quo modi? Lorem Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Corporis, nisi maiores. Sapiente deserunt ad, quisquam 
        suscipit corporis tenetur eos ipsum eius quod praesentium mollitia assumenda 
        labore quibusdam alias, harum exercitationem.
      </p>
      </div>
    </>
  );
}

export default Animation;

