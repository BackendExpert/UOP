import React, { useState } from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'
import { FaLink } from 'react-icons/fa'

const AllComponent = () => {
    const [selectedTab, setSelectedTab] = useState("Events");

    return (
        <div className='xl:px-16 px-4 bg-gray-200 py-16'>
            <div className="xl:flex">
                <div className="w-full xl:mr-4">
                    <div className="bg-gray-200">
                        <div className="flex flex-col lg:flex-row text-xl font-semibold uppercase justify-around text-[#560606]">
                            <div
                                className={`${
                                    selectedTab === "Events"
                                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl"
                                        : "text-white border border-[#1E3A8A] bg-[#1E3A8A]"
                                } py-4 px-6 w-full text-center rounded-xl cursor-pointer mb-4 lg:mb-0 lg:mr-4`}
                                onClick={() => setSelectedTab("Events")}
                            >
                                <h1>Events</h1>
                            </div>
                            <div
                                className={`${
                                    selectedTab === "News"
                                        ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-xl"
                                        : "text-white border border-[#1E3A8A] bg-[#1E3A8A]"
                                } py-4 px-6 w-full text-center rounded-xl cursor-pointer mb-4 lg:mb-0 lg:mx-4`}
                                onClick={() => setSelectedTab("News")}
                            >
                                <h1>News</h1>
                            </div>
                            <div
                                className={`${
                                    selectedTab === "Notice"
                                        ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-xl"
                                        : "text-white border border-[#1E3A8A] bg-[#1E3A8A]"
                                } py-4 px-6 w-full text-center rounded-xl cursor-pointer mb-4 lg:mb-0 lg:ml-4`}
                                onClick={() => setSelectedTab("Notice")}
                            >
                                <h1>Notice</h1>
                            </div>
                        </div>

                    </div>

                    <div>
                        {/* Conditionally render the content based on the selected tab */}
                        {selectedTab === "Events" && <Events />}
                        {selectedTab === "News" && <News />}
                        {selectedTab === "Notice" && <Notice />}
                    </div>
                </div>

                <div className="xl:my-0 my-4 xl:w-1/3">
                    <div className="bg-white mx-4 shado mb-4">
                        <a href="#">
                            <div data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="flex p-4 bg-gradient-to-r from-blue-900 to-sky-600 border-b border-white text-white duration-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:text-white hover:border-blue-500">
                                <div className="mt-2"><FaLink className='h-4 w-auto' /> </div>
                                <h1 className="text-lg pl-2">ONLINE PAYMENTS</h1>
                            </div>
                        </a>
                        <a href="#">
                            <div data-tooltip-target="tooltip-top" data-tooltip-placement="top" className="flex p-4 bg-gradient-to-r from-blue-900 to-sky-600 border-b border-white text-white duration-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:text-white hover:border-blue-500">
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
