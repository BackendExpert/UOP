import React from 'react'
import { serviceData } from '../../components/ServiceData/ServiceData'

const Services = () => {
  return (
    <div className='bg-gray-200 px-4'>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Services</h1>

        <div data-aos="zoom-in" className="bg-white my-4 rounded shadow-xl">
            {
                serviceData.map((service, index) => {
                    return (
                        <div className="" key={index}>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services