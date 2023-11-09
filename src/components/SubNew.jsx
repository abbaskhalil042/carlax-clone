import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SubNew = () => {
  return (
    <div className="flex flex-col justify-center flex-wrap items-center mb-[6rem] ">
      <button className="absolute top-[363rem] bg-blue-900  w-[8rem] h-[1.8rem] text-white font-thin text-sm rounded-md z-20">
        News & Updates
      </button>
      <img
        className="relative  "
        src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/post-3-copyright-370x276.jpg"
        alt=""
      />
      <div className="flex justify-center gap-[1rem]  ">
        <div className="">
          <h1 className="font-bold text-5xl">38</h1>
          <p className="text-gray-500">04.2018</p>
        </div>
        <div className=" ">
          <h1 className="text-lg font-bold">New Car Starter Issues</h1>
          <p className="w-[18rem] text-gray-500">
            Usually, new cars do not let their owners experience starter
            problems.…
          </p>
          <span className="text-[.7rem] text-blue-800">
            LEARN MORE <BsArrowRight />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubNew;
