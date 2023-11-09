import React from "react";
import WhyClient from "./WhyClient";
import MoreServices from "./MoreServices";
import SatisfiedClient from "./SatisfiedClient";
// import Review from "./Review";

const ReasonSec = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-[4rem]">
      <div className="up flex">
        <img
          className="h-[25rem] w-[25rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/service-4-copyright-760x590.jpg"
          alt=""
        />
        <img
          className="h-[25rem] w-[25rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/service-3-copyright-760x590.jpg"
          alt=""
        />
        <WhyClient heading={"Why Clients Choose Our Services"} subHeading={"We appreciate your trust and hope that you find our services helpful."} />
      </div>

      <div className="down w-full relative h-[50rem] flex justify-center item-center bg-[#ffc803]">
        <img
          className="h-[25rem] w-[25rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/service-2-copyright-760x590.jpg"
          alt=""
        />
        <MoreServices />
        <img
          className="h-[25rem] w-[25rem]"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/service-1-copyright-760x590.jpg"
          alt=""
        />

      
      </div>
      <div className="satisfied-clients flex gap-[6rem] absolute top-[290rem] bottom-[10rem]">
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
          <SatisfiedClient />
          {/*  */}
        </div>
      {/* <Review/> */}
    </div>
  );
};

export default ReasonSec;
