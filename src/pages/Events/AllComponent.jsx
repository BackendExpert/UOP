import React, { useState } from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'
import { FaLink } from 'react-icons/fa'


const AllComponent = () => {
    const [menuflex, setmenuflex] = useState("Events")

    const headlemenuflex = ({ name }) => {
        setmenuflex("")
        setmenuflex(name)
        console.log(menuflex)
    }

    return (
        <div className='xl:px-16 px-4 bg-gray-200 py-16'>
            <div className="xl:flex">
                <div className="w-full xl:mr-4">
                    <div className="bg-gray-200">
                        <div className="flex text-xl font-semibold uppercase justify-around text-[#560606]">
                            <div className={`${menuflex === "Events" ? 'bg-[#560606] text-white shadow-xl' : 'border border-[#e8b910] bg-[#e8b910] '}md:mr-4 py-4 px-6 w-full text-center rounded-xl cursor-pointer`} onClick={() => headlemenuflex({ name: "Events" })}>
                                <h1 className="" >Events</h1>
                            </div>
                            <div className={`${menuflex === "News" ? 'bg-[#560606] text-white shadow-xl' : 'border border-[#e8b910] bg-[#e8b910]'}   md:mx-4 py-4 px-6 w-full text-center rounded-xl cursor-pointer`} onClick={() => headlemenuflex({ name: "News" })}>
                                <h1 className="" >News</h1>
                            </div>
                            <div className={`${menuflex === "Notice" ? 'bg-[#560606] text-white shadow-xl' : 'border border-[#e8b910] bg-[#e8b910]'}   md:ml-4 py-4 px-6 w-full text-center rounded-xl cursor-pointer`} onClick={() => headlemenuflex({ name: "Notice" })}>
                                <h1 className="" >Notice</h1>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {
                            (() => {
                                if (menuflex === "Events") {
                                    return (
                                        <Events />
                                    )
                                }
                                else if (menuflex === "News") {
                                    return (
                                        <News />
                                    )
                                }
                                else if (menuflex === "Notice") {
                                    return (
                                        <Notice />
                                    )
                                }
                            })()
                        }
                    </div>

                </div>
                {/* <div className="xl:my-0 my-4">
                <Events />
            </div>
            <div className="xl:my-0 my-4">
                <News />
            </div>
            <div className="xl:my-0 my-4">
                <div className="">
                    <Notice />
                </div>   
            </div> */}
                <div className="xl:my-0 my-4 xl:w-1/3">
                    <div className="bg-white mx-4 shado mb-4">
                        <a href="#">
                            <div data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="flex p-4 bg-[#560606] border-b border-[#e8b910] text-[#e8b910] duration-500 hover:bg-[#e8b910] hover:text-[#560606]">
                                <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                                <h1 className="text-lg pl-2">ONLINE PAYMENTS</h1>
                            </div>
                        </a>
                        <a href="#">
                            <div data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="flex p-4 bg-[#560606] text-[#e8b910] duration-500 hover:bg-[#e8b910] hover:text-[#560606]">
                                <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                                <h1 className="text-lg pl-2">Donate Now</h1>
                            </div>
                        </a>
                    </div>
                    <div className="relative z-10">
                        <Services />
                    </div>
                    <div className="my-6 relative z-0">
                        <QuickLinks />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllComponent