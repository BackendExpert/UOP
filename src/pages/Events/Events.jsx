import React from 'react'
import { testeventdata } from '../../components/Events/EventData'

const Events = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Events</h1>

        <div className="my-4">
            {
                testeventdata.map((event, index) => {
                    return (
                        <div data-aos="zoom-in" className="mb-4 rounded shadow-xl bg-white p-4" key={index}>
                            <h1 className="text-xl font-semibold text-[#560606]">{event.name}</h1>
                            <p className="pt-2">{event.decs}</p>

                            <div className="flex justify-between pt-4">
                                <div className="">
                                    <a href={event.link}>
                                        <h1 className="text-[#e8b910] font-semibold hover:text-[#560606] duration-500">Read More</h1>
                                    </a>
                                </div>
                                <div className="">
                                    <h1 className="text-gray-500">{event.date}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Events