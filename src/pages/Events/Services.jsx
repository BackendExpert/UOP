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
            const [isHovered, setIsHovered] = useState(false);

            // Check if datamenu exists and has items, otherwise provide a fallback link
            const hasDataMenu = service.datamenu && service.datamenu.length > 0;
            const link = hasDataMenu ? service.link : "#";  // Fallback link if no datamenu items

            return (
              <div 
                key={index} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                className="relative"
              >
                {
                    service.link !== '' ?
                    <div className="">
                        <a href={link}>
                            <div className="flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]">
                                <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                                <h1 className="text-lg pl-2">{service.name}</h1>
                            </div>
                        </a>
                    </div>
                    :
                    <div className="">
                        <div className="">
                                <div className="flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]">
                                    <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                                    <h1 className="text-lg pl-2">{service.name}</h1>
                                </div>
                        </div>
                    </div>
                }

                {/* If hovered and there are datamenu items, display them */}
                {isHovered && hasDataMenu && (
                  <ul className="absolute left-0 xl:right-8 md:left-4 md:right-72 xl:-left-8 top-12 bg-[#560606] shadow-lg rounded-md p-4 z-10">
                    {service.datamenu.map((item, i) => (
                      <li key={i} className="text-sm text-white py-1 hover:text-[#e8b910]">
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Services;
