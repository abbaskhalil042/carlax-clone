import React from "react";
import TriangleShape from "./TriangleShape";
import Forcheckbox from "./Forcheckbox";

const FootSubscribe = () => {
  return (
    <div>
      <div className="subscribe text-gray-400 ">
        <TriangleShape className={"w-[1rem]"} />
        <h1>Subscribe</h1>
        <input
          className="py-[.8rem] w-[16rem] px-[.6rem] font-thin outline-none "
          type="email"
          placeholder="Your email"
        />
        <Forcheckbox />
        <p className="">Get the latest updates and offers.</p>
        {/* <div class="p-3 bg-blue-500 rounded-br-3xl rounded-tr-3xl">rounded bottom left</div> */}
      </div>
    </div>
  );
};

export default FootSubscribe;
