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
                        <a href={quicklink.link}>
                            <div className=" flex p-4 border-b border-[#560606]/20 duration-500 hover:bg-[#e8b910] hover:text-[#560606]" key={index}>
                                <div className="mt-2"><FaLink className='h-4 w-auto'/> </div>
                                <h1 className="text-lg pl-2">{quicklink.name}</h1>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default QuickLinks