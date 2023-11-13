import React from "react";
import "../styles/Features.css";
import TriangleShape from "../components/TriangleShape.jsx";
import SubFeature from "./SubFeature.jsx";
// import "../styles/Features.css"

const Features = () => {
  return (
    <div className="feature-section  w-full text-center flex flex-wrap  ">
      {/* <div className="shape"> */}
      <TriangleShape className="shape" />
      {/* </div> */}
      {/* <div> */}
        <div className="title flex justify-center w-full max-h-fit item-center flex-col mb-10">
          <h1 className="w-[55rem] mt-12 mb-8 ml-[18rem] font-extrabold text-5xl">
            We’re a company of talented engineers & mechanics
          </h1>
          <p className="text-center text-blue-gray-200">
            We are one of the leading auto repair companies.
          </p>
        </div>
        <div className="feature-img ml-[2rem] flex justify-center item-center  ">
          <SubFeature />
          <SubFeature />
          <SubFeature />
          <SubFeature />
          <SubFeature />
          <SubFeature />
        </div>
        <button className="feature-btn w-[17rem] ml-[36rem] h-[3.8rem] bg-brown-800 mt-12 text-white text-[.7rem] hover:bg-brown-600">
          SCHEDULE AN APPOINTMENT
        </button>
      </div>
    // </div>
  );
};

export default Features;
