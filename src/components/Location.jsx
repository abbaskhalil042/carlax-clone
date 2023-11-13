import React from "react";
import WhyClient from "./WhyClient";
import "../styles/location.css";
// import { Checkbox } from "@material-tailwind/react";
// import CheckBox from ".c/CheckBo";

// import CheckBox from ""
import Forcheckbox from "./Forcheckbox";

const Location = () => {
  return (
    <div className="location-wrap w-full  h-[100vh] flex md: justify-center items-center">
      <div className="location w-[50%] bg-orange-100 h-full ">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      {/* h-[25rem] */}
      <div className="appointment  flex flex-wrap flex-col ">
        <div className="text">
          <WhyClient
            heading={"Request anAppointment"}
            subHeading={
              "Please fill out the contact form and our operator will contact you to schedule an appointment."
            }
          />
        </div>

        <div className="form flex flex-col ml-[3.5rem] mt-[3rem]  flex-wrap   ">
          <div className="name flex gap-[2rem] flex-wrap mb-[1rem]">
            <input
              className=" w-[13rem] py-[.4rem] outline-none border-b-[1px] border-gray-400"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-[13rem] outline-none border-b-[1px] border-gray-400"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="email flex gap-[2rem] [2rem] flex-wrap mb-[1rem]">
            <input
              className="w-[13rem] py-[.4rem] outline-none border-b-[1px] border-gray-400"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="w-[13rem] outline-none border-b-[1px] border-gray-400"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div className="checkbox flex  flex-col justify-center flex-wrap ">
            <div className="appointment-reason">
              <input
                className="appointment-input py-[.4rem] w-[28rem] mb-[2rem] outline-none border-b-[1px] border-gray-400"
                type="text"
                placeholder="Appointment Reason"
              />

              <div className="force-checkbox flex  flex-wrap gap-4 ">
                {/* <CheckBox/> */}

                <Forcheckbox />
             
              <button className="text-left mt-[4rem] text-[.8rem]  bg-[#908c8a] w-fit font-[500] text-gray-300 py-[1.3rem] px-[2.7rem] transition ease-out delay-[1] hover:bg-blue-800">
                REQUEST AN APPOINTMENT
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
