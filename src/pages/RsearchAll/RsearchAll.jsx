import React from 'react'
import BarChart from '../../components/Charts/BarChart'

const RsearchAll = () => {
  return (
    <div className='xl:px-24 px-4 mt-16'>
        <div className="py-16">
            <h1 className="text-3xl uppercase font-semibold text-[#560606]">research and innovation</h1>


            <div className="grid xl:grid-cols-3 gap-4 mt-8">
                <div className="">
                    <h1 className="text-2xl font-semibold text-[#560606]">More Research</h1>
                    <p className='text-gray-500 mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam soluta aliquam voluptatum obcaecati magni minus cumque quam at placeat officiis tempora iure ad, eligendi et quidem iste, rem facere!
                    </p>

                    <div className="">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RsearchAll