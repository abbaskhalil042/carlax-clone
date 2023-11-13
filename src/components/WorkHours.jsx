import React from 'react'
import { CiClock2 } from "react-icons/ci";
import TriangleShape from './TriangleShape';

const WorkHours = () => {
  return (
    <div>
          <div className="work-hours ">
        <TriangleShape />
        <h1 className="text-white font-bold text-2xl ">Work hours</h1>

        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
        <div className="flex gap-3">
          <CiClock2 className="text-gray-100 mt-[.3rem]" />
          <span className="text-gray-400 font-thin"> Monday:</span>
        </div>
      </div>
    </div>
  )
}

export default WorkHours