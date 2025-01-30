import React from 'react'
import { serviceData } from '../../components/ServiceData/ServiceData'
import { FaLink } from 'react-icons/fa6'

const Services = () => {
  return (
    <div className='bg-gray-200 px-4'>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Services</h1>

        <div data-aos="zoom-in" className="bg-white my-4 rounded shadow-xl">
            {
                serviceData.map((service, index) => {
                    return (
                        <a href="" key={index}>
                            <div className="flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]" >
                                <div className="mt-2"><FaLink className='h-4 w-auto'/> </div>
                                <h1 className="text-lg pl-2">{service.name}</h1>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services