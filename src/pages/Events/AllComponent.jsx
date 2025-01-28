import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'

const AllComponent = () => {
  return (
    <div className='my-4 md:px-28 px-4 bg-gray-200 py-16'>
        <div className="md:flex">
            <div className="w-1/3">
                <Events />
            </div>
            <div className="w-1/3">
                <QuickLinks />
            </div>
            <div className="w-1/3">
                <Notice />
            </div>
        </div>
    </div>
  )
}

export default AllComponent