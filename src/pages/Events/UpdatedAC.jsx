import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'

const UpdatedAC = () => {
  return (
    <div className='xl:px-16 px-4 bg-gray-200 py-16'>


        <div className="xl:flex gap-4">
            <div className="w-5/6">
                <div className="xl:grid grid-cols-3 gap-4 bg-[#560606] py-4 text-white rounded shadow-xl">
                    <div className="w-full">
                        <h1 className="text-center uppercase font-semibold">Events</h1>
                    </div>
                    <div className="w-full">
                        <h1 className="text-center uppercase font-semibold">NEWS</h1>
                    </div>
                    <div className="w-full">
                        <h1 className="text-center uppercase font-semibold">Notice</h1>
                    </div>
                </div>
            </div>
            <div className="xl:my-0 my-4">
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

export default UpdatedAC