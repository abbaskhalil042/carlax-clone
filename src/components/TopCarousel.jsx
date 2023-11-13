import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import '../styles/Nav.css'

const TopCarousel = () => {
  return (
  <div>


    <Carousel className={{}}>
      <div className="relative h-[50rem] mt-[6rem] w-full">
        <img
        src="https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_1280.jpg"
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


      <div className="relative h-[50rem] mt-[6rem] w-full">
        <img
        src="https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_1280.jpg"
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


      <div className="relative h-[50rem] mt-[6rem] w-full">
        <img
        src="https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_1280.jpg"
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
    </div>
  );
};

export default TopCarousel;
