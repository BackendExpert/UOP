import React from 'react'
import Events from './Events'
import QuickLinks from './QuickLinks'
import Notice from './Notice'
import News from '../News/News'
import LearnAtUop from './LearnAtUop'
import Services from './Services'

const AllComponent = () => {
  return (
    <div className='my-4 md:px-16 px-4 bg-gray-200 py-16'>
        <div className="md:grid grid-cols-4 gap-4">
            <div className="">
                <Events />
            </div>
            <div className="">
                <News />
            </div>
            <div className="">
                <div className="">
                    <LearnAtUop />                
                </div>
                <div className="">
                    <Services />
                </div>
            </div>
            <div className="">
                <div className="">
                    <QuickLinks />
                </div>
                <div className="">
                    <Notice />
                </div>               
            </div>
        </div>
    </div>
  )
}

export default AllComponent