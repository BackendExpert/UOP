import React from 'react'
import { dataforcount } from './Data'
import CountUp from 'react-countup'


const DataCount = () => {
  return (
    <div className='my-8'>
        <div className="md:grid grid-cols-5 gap-8">
            {
                dataforcount.map((data, index) => {
                    return (
                        <div className="text-[#560606] text-center py-4 px-2 md:my-0 my-4" key={index}>
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
    </div>
  )
}

export default DataCount