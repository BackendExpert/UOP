import React from 'react'
import BarChart from '../../components/Charts/BarChart'
import { researchstats } from './ResearchStatus'
import useResData from '../../components/ReseachSection/ResearchAllData'

const RsearchAll = () => {
    const researchdata = useResData()

 
  return (
    <div className='xl:px-24 px-4 mt-16 bg-gray-200'>
        <div className="py-16">
            <h1 className="text-3xl uppercase font-semibold text-[#560606]">research and innovation</h1>


            <div className="md:flex mt-4">
                <div className="md:w-1/2 mr-2 bg-white p-4 rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold text-[#560606]">More Research</h1>
                    <p className='text-gray-500 mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam soluta aliquam voluptatum obcaecati magni minus cumque quam at placeat officiis tempora iure ad, eligendi et quidem iste, rem facere!
                    </p>

                    <div className="md:block hidden mt-4">
                        <BarChart />
                    </div>
                </div>
                <div className="md:w-1/2 ml-2">
                    <div className="bg-white p-16 h-full rounded-xl shadow-xl">
                        <div className="grid grid-cols-3 gap-6">
                            {
                                researchstats.map((data, index) => {
                                    return (
                                        <div className="" key={index}>
                                            <center>
                                                <data.icon className='h-12 w-full fill-[#560606]' />
                                                <a href={data.link}>
                                                    <h1 className="mt-8 text-xl text-gray-500 font-semibold duration-500 hover:text-[#e8b910]">{data.name}</h1>
                                                </a>
                                            </center>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>



            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
                {
                    researchdata.map((research, index) => {
                        return (
                            <div data-aos="zoom-in" className="max-h-full bg-white rounded-xl shadow-xl max-h-auto" key={index}>
                                <img src={`${import.meta.env.VITE_APP_API}/${research.res_img}`} alt="" className='h-60 w-full rounded-t-xl'/>
            
                                <div className="p-4">
                                    <h1 className="font-semibold uppercase text-[#560606] pb-2">{research.res_titile}</h1>
                                    <p className="text-gray-500">{research.res_desc}</p>
            
                                    <div className="mt-4 flex justify-between">
                                        <div className="w-full">
                                            <a href={research.link}>
                                                <button className='bg-[#560606] py-2 px-4 text-white rounded-full shadow-xl duration-500 hover:px-6'>Read More</button>
                                            </a>
                                        </div>
                                        <div className="mt-2 w-full">
                                            <p className="text-gray-500 duration-500 hover:text-[#560606] hover:font-semibold">{research.res_faculty}</p>
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
  )
}

export default RsearchAll