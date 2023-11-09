import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const TopCarousel = () => {
  return (
    <Carousel className={{}}>
      <div className="relative h-[50rem] mt-[6rem] w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-md md:text-md lg:text-md font-thin"
            >
              Auto repair and tunning company
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-10 opacity-80 text-5xl w-full font-extrabold"
            >
              Professional Auto Repair & Maintenance
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-sm md:text-sm lg:text-sm font-thin" 
            >
             Welcome to Carlex - Your brand new reliable car repair company. We provide the widest range of automative maintenance service!
            </Typography>
            <div className="flex justify-center gap-4 ">
              <Button size="lg"  variant="gradient" color="blue"  className="w-[15rem] h-[4rem] rounded-none font-thin mt-5 bg-blue-800">
                OUR MAIN SERVICES
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[51rem] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="blue" className="w-[15rem] h-[4rem] rounded-none font-thin mt-5 bg-blue-800">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-md md:text-md lg:text-md font-thin"
            >
              Auto repair and tunning company
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-10 opacity-80 text-5xl w-full font-extrabold"
            >
              Professional Auto Repair & Maintenance
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-sm md:text-sm lg:text-sm font-thin" 
            >
             Welcome to Carlex - Your brand new reliable car repair company. We provide the widest range of automative maintenance service!
            </Typography>
            <div className="flex justify-center gap-4 ">
              <Button size="lg"  variant="gradient" color="blue"  className="w-[15rem] h-[4rem] rounded-none font-thin mt-5 bg-blue-800">
                OUR MAIN SERVICES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default TopCarousel;
