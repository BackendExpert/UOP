import React, { useState } from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'

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
                <div className="">
                    <div className="flex text-xl font-semibold uppercase justify-between w-full bg-[#560606] py-4 px-6 text-white rounded-md shadow-xl">
                        <h1 className="cursor-pointer" onClick={() => headlemenuflex({ name: "Events"})}>Events</h1>
                        <h1 className="cursor-pointer" onClick={() => headlemenuflex({ name: "News"})}>News</h1>
                        <h1 className="cursor-pointer" onClick={() => headlemenuflex({ name: "Notice"})}>Notice</h1>
                    </div>
                </div>

                <div className="">
                    {
                        (() => {
                            if(menuflex === "Events"){
                                return (
                                    <Events />
                                )
                            }
                            else if(menuflex === "News"){
                                return(
                                    <News />
                                )
                            }
                            else if(menuflex === "Notice"){
                                return(
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
                <div className="">
                    <QuickLinks />
                </div>
                <div className="my-6">
                    <Services />
                </div>            
            </div>
        </div>
    </div>
  )
}

export default AllComponent