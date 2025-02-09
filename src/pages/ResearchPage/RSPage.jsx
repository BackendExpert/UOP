import React from 'react'
import { researchdata } from '../../components/ReseachSection/RSdata'

const RSPage = () => {
  return (
    <div className='xl:px-28 px-4 my-8'>
        <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Research and Innovation</h1>
        <div className="text-center py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis optio dolorum exercitationem labore consectetur deleniti, sint possimus sequi est alias dolor, repellendus reiciendis! Nobis debitis placeat delectus, tempore esse ab.</div>

        <div className="xl:flex">
            <div className="flex justify-center items-center xl:w-1/5 w-full">
                <div data-aos="zoom-in" className="w-full p-8 rounded shadow-xl text-center bg-gray-200">
                    <h1 className="uppercase text-[#560606] font-semibold text-center py-4">
                        Research and Innovation
                    </h1>
                    <p>About Research and Innovation at UOP</p>
                </div>
            </div>
            <div className="w-full xl:ml-4">
                <div className="xl:grid grid-cols-4 gap-4">
                    {
                        researchdata.map((data, index) => {
                            return (
                                <div className="" key={index}>
                                    <div 
                                        data-aos="zoom-in" 
                                        style={{ backgroundImage: `url(${data.img})` }}
                                        className="rounded w-full relative bg-cover bg-center py-32 text-center text-white group overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                            <h1 className="text-xl font-semibold">{data.name}</h1>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="relative">
                                                <h1 className="text-xl font-bold">{data.name}</h1>

                                                {data.link && (
                                                    <a href={data.link}>
                                                        <button className="mt-4 bg-white py-1 px-4 rounded text-black">
                                                            Read More
                                                        </button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>


    
    </div>
  )
}

export default RSPage