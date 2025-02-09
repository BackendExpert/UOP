import React from 'react'
import { researchdata } from '../../components/ReseachSection/RSdata'

const RSPage = () => {
  return (
    <div className='xl:px-28 px-4 my-8'>
        <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Research and Innovation</h1>
        <div className="text-center py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis optio dolorum exercitationem labore consectetur deleniti, sint possimus sequi est alias dolor, repellendus reiciendis! Nobis debitis placeat delectus, tempore esse ab.</div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
            {
                researchdata.map((data, index) => {
                    return (
                        <div data-aos="zoom-in" className="bg-gray-200 shadow-2xl" key={index}>
                            <div className="">
                                <div                                      
                                    style={{ backgroundImage: `url(${data.img})` }}
                                    className="rounded-t-xl w-full relative bg-cover bg-center py-28 text-center text-white group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-4 border border-gray-100">
                                    <h1 className="text-xl font-semibold">{data.name}</h1>
                                    {data.desc}

                                    <div className="mt-4">
                                        <a href={data.link}>
                                            <button className='bg-[#560606] py-2 px-4 rounded-full shadow-xl text-white duration-500 hover:px-6'>Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default RSPage