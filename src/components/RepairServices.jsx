import React from "react";
import "../styles/repairServices.css";
// import "../styles/services.css";

import images from "../images/asset 7.webp";

const RepairServices = () => {
  return (
    // <div className="repari-services">
      <div className="feature-img flex flex-col justify-center items-center mt-[15rem]">
        <div className="image">
          <img className="" src={images} alt="" />
        </div>
        <div className="feature-text flex flex-col justify-center items-center ">
          <p className="title text-lg font-semibold ">Car diagnostic</p>
          <p className="sub-title w-[14rem] text-center">
            Our experts can diagnose your vehicle’s condition right away
          </p>
        </div>
      </div>
    // </div>
  );
};

export default RepairServices;
