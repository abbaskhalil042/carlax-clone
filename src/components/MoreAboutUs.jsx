import React from "react";
import TriangleShape from "./TriangleShape";
// import {asset3 , asset2} from "./images"
// import { aboutImg1,aboutImg2 } from "../images";

const MoreAboutUs = () => {
  return (
    <>
    {/* <div className="mr-[5rem] absolute bottom-[30rem] left-[9rem]">
     
      </div> */}
    <div className="about-us flex h-[45rem] items-center justify-around mt-1 bg-brown-50  ">
      

      <div className="text">
        <h1 className="mr-[30rem] mb-[5rem] mt-0"><TriangleShape /></h1>
        <h1 className="font-extrabold w-[33rem] text-5xl mb-10">
          We practice innovative methods of car repair and tuning
        </h1>
        <p className="w-[25rem] text-gray-500 ">
          This means that we have new equipment for any type of examination,
          repair and customization service.
        </p>
        <button className="w-[11rem] h-[3.6rem] bg-blue-700 mt-12 text-white text-[.7rem]">
          MORE ABOUT US
        </button>
      </div>
      <div className="image-video">
        {/* <img src={aboutImg1} alt="" />
            <img src={aboutImg2} alt="" /> */}
        <div className="relative">
          <img
            className=" h-[25rem] w-60rem]"
            src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/img-12-copyright.jpg"
            alt=""
          />
        </div>
        <img
          className="absolute top-[130rem] left-[40rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/img-9-copyright.jpg"
          alt=""
        />
      </div>
    </div>
    </>
  );
};

export default MoreAboutUs;
