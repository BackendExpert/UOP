import React from 'react'
import { testeventdata } from '../../components/Events/EventData'

const Events = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Events</h1>

        <div className="md:grid grid-cols-1 gap-4">
            {
                testeventdata.map((event, index) => {

                    return (
                        <div key={index} data-aos="zoom-in" style={{ backgroundImage: `url(${event.img})` }} className="bg-cover bg-center h-auto my-4 shadow-xl rounded w-full relative bg-white bg-cover bg-center py-32  group overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                <h1 className="text-xl font-semibold text-white">{event.name}</h1>
                            </div>
                            <div className="p-4 absolute bg-[#e8b910] inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <div className="relative ">
                                    <h1 className="text-xl text-[#560606] font-bold">{event.name}</h1>
                                    <p className="text-[#560606]">{event.decs}</p>
                                    <a href={event.link}>
                                        <h1 className="text-[#560606] duration-500 hover:font-semibold">Read More</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <center>
            <a href="#">
                <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All Events</button>
            </a>
        </center>
    </div>
  )
}

export default Events