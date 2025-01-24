import React from 'react'
import UopLogo from '../../assets/uoplogo.png'
import { mainNavigation, informationFor, quickLinks } from './FooterData'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#560606] md:px-28 px-4 text-white">
        <div className='py-16'>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img src={UopLogo} alt="" className='h-20 w-auto'/>

                    <div className="mt-4 ml-8">
                        <p className="py-2 text-lg">University of Peradeniya</p>
                        <p className="py-2 text-lg">Peradeniya</p>
                        <p className="py-2 text-lg">20400</p>
                        <p className="py-2 text-lg">Sri Lanka</p>
                    </div>

                    <div className="mt-4 ml-8">
                        <p className="">Phone : <span>+94 81 238 8301</span></p>
                        <p className="">Fax : <span>+94 81 238 8102</span></p>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <div className="md:grid grid-cols-3 gap-4">
                        <div className="w-full md:my-0 my-8">
                            <h1 className="uppercase font-semibold text-xl">main navigation</h1>
                            <hr className='w-3/4 my-2'/>
                            <div className="mt-8">
                                {
                                    mainNavigation.map((data, index) => {
                                        return (
                                            <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-2 font text-lg' key={index}>
                                                <a href={data.link}>{data.name}</a>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full md:my-0 my-8">
                            <h1 className="uppercase font-semibold text-xl">Information for</h1>
                            <hr className='w-3/4 my-2'/>
                            <div className="mt-8">
                                {
                                    informationFor.map((data, index) => {
                                        return (
                                            <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-2 font text-lg' key={index}>
                                                <a href={data.link}>{data.name}</a>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-full md:my-0 my-8">
                            <h1 className="uppercase font-semibold text-xl">quick links</h1>
                            <hr className='w-3/4 my-2'/>
                            <div className="mt-8">
                                {
                                    quickLinks.map((data, index) => {
                                        return (
                                            <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-2 font text-lg' key={index}>
                                                <a href={data.link}>{data.name}</a>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-2 border-t border-[#e8b910] md:text-left text-center">            
            Copyright © {currentYear} University of Peradeniya . All rights reserved.
        </div>
    </div>
  )
}

export default Footer