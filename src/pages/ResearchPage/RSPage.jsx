import React from 'react'
import { researchdata } from '../../components/ReseachSection/RSdata'

const RSPage = () => {
  return (
    <div className='xl:px-28 px-4 my-8'>
        <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Research and Innovation</h1>
        <div className="text-center py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis optio dolorum exercitationem labore consectetur deleniti, sint possimus sequi est alias dolor, repellendus reiciendis! Nobis debitis placeat delectus, tempore esse ab.</div>

        <div className="xl:flex">
            <div className="w-1/5 bg-gray-200 rounded shadow-xl">
                <h1 className="uppercase text-[#560606] font-semibold text-center py-4">Research and Innovation</h1>
                <p className="text-center py-4 px-8">About Research and Innovation at UOP</p>
            </div>
        </div>

        <div className="xl:grid grid-cols-4 gap-4">
            {
                researchdata.map((data, index) => {
                    return (
                        <div className="" key={index}>
                            
                        </div>
                    )
                })
            }
        </div>
    
    </div>
  )
}

export default RSPage