import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'

const AllComponent = () => {
  return (
    <div className='my-4 md:px-28 px-4 bg-gray-200 py-16'>
        <div className="md:flex">
            <div className="md:w-1/2 md:mx-8 md:my-0 my-4">
                <Events />
            </div>
            <div className="md:w-1/2">
                <div className="w-full md:mr-2 md:my-0 my-4">
                    <QuickLinks />
                </div>
            </div>
        </div>
        <div className="w-full md:ml-2 md:my-0 my-4">
            <Notice />
        </div>
    </div>
  )
}

export default AllComponent