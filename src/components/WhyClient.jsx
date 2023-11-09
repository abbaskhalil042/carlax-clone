import React from "react";
import TriangleShape from "./TriangleShape";

const WhyClient = ({heading, subHeading}) => {
  return (
    <div>
      <div className="text className='h-[25rem] w-[25rem] flex-wrap flex flex-col justify-center items-center">
        <h1 className="mr-[15rem] ">
          <TriangleShape />
        </h1>
        <h1 className="font-extrabold text-4xl mb-6 w-[17rem] mt-[2rem] ">
          {/* Why Clients Choose Our Services */}
          {heading}
        </h1>
        <p className="w-[16rem] text-gray-500 ">
          {/* We appreciate your trust and hope that you find our services helpful. */}
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default WhyClient;
