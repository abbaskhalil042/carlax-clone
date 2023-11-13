import React from "react";
import { Carousel } from "@material-tailwind/react";
import TriangleShape from "./TriangleShape";
import "../styles/review.css"

const Review = () => {
  return (
    <div className="review-up"> 
      <div className=" text bg-[#493834] w-full  ">
    
       <div className="flex flex-col justify-center items-center ">
            <TriangleShape />
       <h1 className=" font-extrabold text-5xl text-white mt-[3rem]">What Clients Say</h1>
        <p className="w-[24rem] text-center mt-[1rem] text-gray-500 mb-[4rem]">
          We are always happy to hear your honest opinion about our service and
          the experience that you get at our shop!
        </p>
       </div>
      </div>
      <Carousel
        className=" flex justify-center  items-center bg-[#493834] "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
   
        <div className="caraosel-text flex flex-col justify-center items-center">
          <p className="w-[35rem] text-center mb-[1rem] text-gray-500">
          
            I was hoping for a simple oil change, but when I came to this body
            shop they found an issue with the brakes, and I am so grateful for
            the fast and effective help! The car works fine, thank you so much!
          </p>
          <img
            src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/2test-copyright-150x150.jpg"
            alt=""
            className="w-[3rem] rounded-full"
          />
          <h1 className="font-bold text-white">Jeremy Watts</h1>
          <p className="mb-[4rem] text-[.9rem] font-thin text-white">Lawyer</p>
        </div>
        <div className=" caraosel-text flex flex-col justify-center items-center">
          <p className="w-[35rem] text-center mb-[1rem] text-gray-500">
            I was hoping for a simple oil change, but when I came to this body
            shop they found an issue with the brakes, and I am so grateful for
            the fast and effective help! The car works fine, thank you so much!
          </p>
          <img
            src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/2test-copyright-150x150.jpg"
            alt=""
            className="w-[3rem] rounded-full"
          />
          <h1 className="font-bold text-white">Jeremy Watts</h1>
          <p className="mb-[5rem] text-[.9rem] font-thin text-white">Lawyer</p>
        </div>

        <div className=" caraosel-text  flex flex-col justify-center items-center">
          <p className="w-[35rem] text-center mb-[1rem] text-gray-500">
            I was hoping for a simple oil change, but when I came to this body
            shop they found an issue with the brakes, and I am so grateful for
            the fast and effective help! The car works fine, thank you so much!
          </p>
          <img
            src="https://carlax.ancorathemes.com/wp-content/uploads/2018/04/2test-copyright-150x150.jpg"
            alt=""
            className="w-[3rem] rounded-full"
            
          />
          <h1 className="font-bold text-white" >Jeremy Watts</h1>
          <p className="mb-[5rem] text-[.9rem] font-thin text-white">Lawyer</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Review;
