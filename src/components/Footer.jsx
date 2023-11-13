import React from "react";
// import {logo} from "../data/data.json"
import FootLogo from "./FootLogo";
import FootService from "./FootService.jsx";
import WorkHours from "./WorkHours.jsx";
import FootTiming from "./FootTiming.jsx";
import FootSubscribe from "./FootSubscribe.jsx";
// import TriangleShape from "./TriangleShape";
import "../styles/footer.css";

// import { CheckBox } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="footer bg-[#211a18] w-full flex items-center justify-around">
      <FootLogo />
      <FootService />

   
      <div className="work-time">
  
        <WorkHours />
        <FootTiming />
      </div>
      

      <FootSubscribe />
    </div>
  );
};

export default Footer;
