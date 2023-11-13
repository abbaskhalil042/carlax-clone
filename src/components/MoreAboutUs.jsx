import React from "react";
import TriangleShape from "./TriangleShape";
import "../styles/moreAbout.css";

// import {asset3 , asset2} from "./images"
// import { aboutImg1,aboutImg2 } from "../images";

const MoreAboutUs = () => {
  return (
    <>
      {/* <div className="mr-[5rem] absolute bottom-[30rem] left-[9rem]">
     
      </div> */}
      {/* <div className="main w-fit flex justify-center items-center"> */}
      <div className="about-us flex h-[45rem] items-center justify-evenly mt-1   ">
        <div className="text w-full">
          <h1 className="mr-[30rem] mb-[5rem] mt-0">
            <TriangleShape />
          </h1>
          <h1 className="heading font-extrabold w-[33rem] text-5xl mb-10">
            We practice innovative methods of car repair and tuning
          </h1>
          <p className="para w-[25rem] text-gray-500 ">
            This means that we have new equipment for any type of examination,
            repair and customization service.
          </p>
          <button className="w-[11rem] h-[3.6rem] bg-blue-700 mt-12 text-white text-[.7rem]">
            MORE ABOUT US
          </button>
        </div>
        
        <div className="image-video">
          <div className="image-video">
            <img
              className="img-1 h-[25rem] w-[35rem] relative"
              src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/img-12-copyright.jpg"
              alt=""
            />
          </div>
          <div className="image-video">

          <img
            className="img-2 absolute mt-10"
            src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/img-9-copyright.jpg"
            alt=""
          />
          </div>
        
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MoreAboutUs;
