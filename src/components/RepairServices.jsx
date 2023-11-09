import React from "react";

import images from "../images/asset 7.webp";

const RepairServices = () => {
  return (
    <div className="feature flex flex-col justify-center items-center mt-[15rem]">
      <div className="image">
        <img className="" src={images} alt="" />
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <p className="text-lg font-semibold ">Car diagnostic</p>
        <p className="w-[14rem] text-center">
          Our experts can diagnose your vehicle’s condition right away
        </p>
      </div>
      
    </div>
  );
};

export default RepairServices;
