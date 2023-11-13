import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const FootLogo = () => {
  return (
    <div className=" flex">
      <div>
        <img
          className="w-[6rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/logo-light.png"
          alt=""
        />

        <div>
          <p className="text-white inline-flex">
            <CiLocationOn className="text-gray-100 mt-[.3rem]" />
            82 12th Street, Office 14, LA
          </p>
        </div>

        <div>
          <p className="text-white inline-flex">
            <MdOutlineMailOutline className="text-gray-100 mt-[.3rem]" />{" "}
            support@example.com
          </p>
        </div>

        <div>
          {" "}
          <p className="text-[1.2rem] text-white font-thin inline-flex">
            <BiPhoneCall className="text-gray-100 mt-[.3rem]" /> 45678904232
          </p>
        </div>
      </div>
    </div>
  );
};

export default FootLogo;
