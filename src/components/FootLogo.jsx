import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
const FootLogo = () => {
  return (
    <div className="logo flex flex-col ">
           <img className="text-left alig"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/logo-light.png"
          alt=""
        />
      <div className="location flex gap-3">
     
        <CiLocationOn className="text-gray-100 mt-[.3rem]" />
        <p className="text-white">82 12th Street, Office 14, LA</p>
      </div>
      <div className="mail flex gap-3">
        <MdOutlineMailOutline className="text-gray-100 mt-[.3rem]" />
        <p className="text-white">support@example.com</p>
      </div>
      <div className="contact flex justify-center item-center gap-3">
        <BiPhoneCall className="text-gray-100 mt-[.3rem]" />
        <p className="text-[1.2rem] text-white font-thin "> 45678904232</p>
      </div>
    </div>
  );
};

export default FootLogo;
