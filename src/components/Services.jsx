import React from "react";
import TriangleShape from "./TriangleShape";
import RepairServices from "./RepairServices";
import "../styles/services.css";
const Services = () => {
  return (
    <div className="wrapper">
      <div className="services flex flex-col justify-center items-center pt-[7rem]  h-[30rem] bg-[#493834]">
<h1>        <TriangleShape /></h1>

        <h1 className="font-extrabold w-[45rem] text-5xl mb-8 tracking-tighter mt-[2rem] text-white ">
          We Provide Professional Service
        </h1>
        <p className="w-[25rem] text-gray-500">
          We are one of the leading auto repair companies.
        </p>
        <img
          className="mt-[2rem] drop-shadow-2xl	"
          src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/car-copyright.png"
          alt=""
        />
      </div>
      <div className="repair flex justify-center items-center gap-[10rem] ">
        <h1 className="relative z-10">
          <span className="absolute top-[11.9rem] right-[6rem] z-[-100] opacity-40 font-black bg-[#ffffff] text-[#67615f] text-6xl">
            1
          </span>
          <RepairServices />
        </h1>
        <h1 className="relative">
          <span className="absolute top-[11.9rem] right-[6rem] z-[-100] opacity-40 font-black bg-[#ffffff] text-[#67615f] text-6xl">
            2
          </span>
          <RepairServices />
        </h1>
        <h1 className="relative">
          <span className="absolute top-[11.9rem] right-[6rem] z-[-100] opacity-40 font-black bg-[#ffffff] text-[#67615f] text-6xl">
            3
          </span>
          <RepairServices />
        </h1>
      </div>
      <button className="w-[17rem] h-[3.8rem] bg-blue-800 mt-12 text-white text-[.7rem] ml-[35rem] mb-[3rem] hover:bg-brown-600 text-center">
        SCHEDULE AN APPOINTMENT
      </button>
    </div>
  );
};

export default Services;
