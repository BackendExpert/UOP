import React, { useState } from 'react';
import { serviceData } from '../../components/ServiceData/ServiceData';
import { FaLink } from 'react-icons/fa6';

const Services = () => {
  return (
    <div className='bg-gray-200 px-4'>
      <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Services</h1>

      <div data-aos="zoom-in" className="bg-white my-4 rounded shadow-xl">
        {
          serviceData.map((service, index) => {
            const [tooltipVisible, setTooltipVisible] = useState(false);

            return (
              <div key={index} className="relative">
                <a href={service.link} 
                   onMouseEnter={() => setTooltipVisible(true)} 
                   onMouseLeave={() => setTooltipVisible(false)}>
                  <div className="flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]">
                    <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                    <h1 className="text-lg pl-2">{service.name}</h1>
                  </div>
                </a>

                {/* Tooltip */}
                {tooltipVisible && (
                  <div 
                    className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-100 tooltip dark:bg-gray-700"
                    style={{ top: '-35px', left: '50%', transform: 'translateX(-50%)' }}
                  >
                    {service.tooltipText || 'Service Details'}
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                )}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services;
