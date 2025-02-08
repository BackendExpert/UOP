import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'

const AllComponent = () => {
  return (
    <div className='xl:px-16 px-4 bg-gray-200 py-16'>
        <div className="xl:grid grid-cols-4 gap-4">
            <div className="xl:my-0 my-4">
                <Events />
            </div>
            <div className="xl:my-0 my-4">
                <News />
            </div>
            <div className="xl:my-0 my-4">
                <div className="">
                    <LearnAtUop />                
                </div>
                <div className="my-6">
                    <Services />
                </div>
            </div>
            <div className="xl:my-0 my-4">
                <div className="">
                    <QuickLinks />
                </div>
                <div className="my-6">
                    <Notice />
                </div>               
            </div>
        </div>
    </div>
  )
}

export default AllComponent