import React from "react";
import images from "../images/asset 7.webp";

const SubFeature = () => {
  return (
    <div className="feature flex flex-col justify-center items-center ">
      <div className="image">
        <img className="" src={images} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <p className="text-lg font-semibold ">Brakes</p>
        <p className="w-[14rem] text-center">A regular brake system checkup can save...</p>
      </div>
    </div>
  );
};

export default SubFeature;
