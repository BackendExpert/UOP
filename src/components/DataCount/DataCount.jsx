import React from 'react'
import { dataforcount } from './Data'
import CountUp from 'react-countup'


const DataCount = () => {
  return (
    <div>
        <div className="md:grid grid-cols-5 gap-4">
            {
                dataforcount.map((data, index) => {
                    return (
                        <div className="bg-[#560606] text-white text-center" key={index}>
                            <h1 className="">{data.name}</h1>
                            <div className="">
                                <data.icon className='h-8 w-auto'/>
                            </div>
                            <h1 className=""><CountUp end={data.value} /> </h1>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DataCount