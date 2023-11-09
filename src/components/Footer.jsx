import React from "react";
// import {logo} from "../data/data.json"
// import FootLogo from "./FootLogo";
import TriangleShape from "./TriangleShape";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
// import { CheckBox } from "@material-tailwind/react";
import Forcheckbox from "./Forcheckbox"

const Footer = () => {
  return (
    <div className="flex-wrap flex justify-center item-center  w-full h-[40rem] bg-[#211a18] ">
      {/* <FootLogo /> */}
      {/* bg-[#211a18] */}

      {/* <div className="logo flex flex-col m-[4rem]">
        <img
          className="w-[6rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/logo-light.png"
          alt=""
        />

        <p className="text-white inline-flex">
          <CiLocationOn className="text-gray-100 mt-[.3rem]" />
          82 12th Street, Office 14, LA
        </p>

        <p className="text-white inline-flex">
          <MdOutlineMailOutline className="text-gray-100 mt-[.3rem]" />{" "}
          support@example.com
        </p>

        <p className="text-[1.2rem] text-white font-thin inline-flex">
          <BiPhoneCall className="text-gray-100 mt-[.3rem]" /> 45678904232
        </p>
      </div> */}

      <div className="services m-[2rem] text-gray-400">
        <TriangleShape />
        <h1 className="text-white font-bold text-2xl">Services</h1>
        <ul className="text-gray-400">
          <li>Maintenance Service</li>
          <li>Only Original Parts</li>
          <li>Express Auto Repair</li>
          <li>International Standards</li>
          <li>Mobile Road Help</li>
          <li>Car Customization</li>
          <li>Repair & Service</li>
        </ul>
      </div>
      <div className="work-hours m-[2rem] ">
        <TriangleShape/>
        <h1 className="text-white font-bold text-2xl ">Work hours</h1>

        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
      </div>

      <div className="timing flex gap-3 flex-col m-[10rem] text-gray-400 ">
        <p> 8:30am - 6:00pm</p>
        <p> 8:30am - 6:00pm</p>
        <p> 8:30am - 6:00pm</p>
        <p> 8:30am - 6:00pm</p>
        <p> 8:30am - 6:00pm</p>
        <p> 8:30am - 6:00pm</p>
        <p>closed</p>

      </div>

      <div className="subscribe text-gray-400 m-[2rem]">
        <TriangleShape className={"w-[1rem]"}/>
        <h1>Subscribe</h1>
        <input className="py-[.8rem] w-[16rem] px-[.6rem] font-thin outline-none " type="email" placeholder="Your email" />
        <Forcheckbox />
        <p className="">Get the latest updates and offers.</p>
      </div>
    </div>
  );
};

export default Footer;
