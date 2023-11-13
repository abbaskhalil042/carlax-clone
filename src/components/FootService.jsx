import React from "react";
import TriangleShape from "./TriangleShape";

const FootService = () => {
  return (
    <div>
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
    </div>
  );
};

export default FootService;
