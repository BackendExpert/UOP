import React from 'react'
import { dataforcount } from './Data'
import CountUp from 'react-countup'


const DataCount = () => {
  return (
    <div className='my-8'>
        <div className="grid xl:grid-cols-5 grid-cols-2 xl:gap-8">
            {
                dataforcount.map((data, index) => {
                    return (
                        <div data-aos="zoom-in" className="text-[#560606] text-center py-4 px-2 xl:my-0 my-4" key={index}>
                            <h1 className="py-2 text-lg uppercase font-semibold">{data.name}</h1>
                            <center>
                                <div className="py-2">
                                    <data.icon className='h-10 w-auto'/>
                                </div>
                            </center>
                            <h1 className="py-2 text-xl"><CountUp end={data.value} duration={10}/> {data.id === 3 ? <span></span> : <span>+</span>}</h1>
                        </div>
                    )
                })
            }
        </div>
        <center className='mt-4'>
            <a href="#" >
                <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>More Statistics</button>
            </a>
        </center>
    </div>
  )
}

export default DataCount