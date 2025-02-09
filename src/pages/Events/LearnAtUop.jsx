import React from 'react'
import { programData } from '../../components/ProgramData/ProgramData'

const LearnAtUop = () => {
  return (
    <div className='bg-gray-200 px-4'>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Learn At UOP</h1>
        <div className="">

        {programData.map((program, index) => (
        <div className="xl:flex py-4" key={index}>
            {/* Left Section - Program Info */}
            <div className="w-full">
                <div data-aos="zoom-in" className="w-full p-8 rounded shadow-xl text-center bg-white">
                    <h1 className="uppercase text-[#560606] font-semibold text-center py-4">
                        {program.name}
                    </h1>                    
                    <p>{program.desc}</p>
                </div>
            </div>
        </div>        
        ))}

        <center>
            <a href="#">
                <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>Learn More</button>
            </a>
        </center>
        </div>
    </div>
  )
}

export default LearnAtUop