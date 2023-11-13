import React from "react";
import TriangleShape from "./TriangleShape";
import SubNew from "./SubNew";
import { company } from "../data/data.json";
import "../styles/newSec.css";

const NewsSec = () => {
  return (
    <div className="news">
      <div className="text flex flex-col ml-[8rem] flex-wrap">
        {/* <div className="sub-text"> */}
        {/* <div className="shape"> */}
          <TriangleShape />
        {/* </div> */}

        <div>
          <h1 className="font-extrabold text-5xl mb-[3rem]">Our Latest News</h1>
          <p className="w-[25rem] mb-[2rem] text-gray-500">
            We post the latest news and updates from the world of cars, trucks,
            and accessories weekly. Stay tuned!
          </p>
        </div>
      </div>
      {/* </div> */}
      <div className="image-sec flex justify-center items-center gap-10">
        {/* <div> */}
          <SubNew />
          <SubNew />
          <SubNew />
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewsSec;
