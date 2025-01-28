import React from 'react'
import { testeventdata } from '../../components/Events/EventData'

const Events = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Events</h1>

        <div className="bg-white my-4">
            {
                testeventdata.map((event, index) => {
                    return (
                        <div className="border-b border-gray-200 p-4" key={index}>
                            <h1 className="text-xl font-semibold text-[#560606]">{event.name}</h1>
                            <p className="pt-2">{event.decs}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Events