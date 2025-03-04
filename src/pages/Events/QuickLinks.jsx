import React from 'react'
import { quickLinks } from '../../components/Footer/FooterData'
import { FaLink } from "react-icons/fa6";

const QuickLinks = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Quick Links</h1>

        <div data-aos="zoom-in" className="bg-white my-4 rounded shadow-xl">
            {
                quickLinks.map((quicklink, index) => {
                    return (
                        <div className="">
                            <a href={quicklink.link}>
                                <div  data-tooltip-target="tooltip-top" data-tooltip-placement="top"className="flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]" key={index}>
                                    <div className="mt-2"><FaLink className='h-4 w-auto'/> </div>
                                    <h1 className="text-lg pl-2">{quicklink.name}</h1>
                                </div>
                            </a>

                            <div id="tooltip-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                                Tooltip on top
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default QuickLinks