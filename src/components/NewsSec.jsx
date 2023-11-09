import React from 'react'
import TriangleShape from './TriangleShape'
import SubNew from './SubNew'
import {company} from "../data/data.json"

const NewsSec = () => {
  return (
    <div>
         
        <div className="text flex flex-col ml-[8rem] flex-wrap">
        <TriangleShape/>
            <h1 className='font-extrabold text-5xl mb-[3rem]'>Our Latest News</h1>
            <p className='w-[25rem] mb-[2rem] text-gray-500'>We post the latest news and updates from the world of cars, trucks, and accessories weekly. Stay tuned!</p>
        </div>
        <div className="image flex justify-center items-center gap-10">
           {/* {rec.map((item,index)=>(
                <SubNew src={{}}/>
           ))} */}

           <SubNew/>
           <SubNew/>
           <SubNew/>
        </div>
    </div>
  )
}

export default NewsSec