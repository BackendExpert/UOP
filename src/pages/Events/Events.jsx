import React from 'react'
import { testeventdata } from '../../components/Events/EventData'

const Events = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Events</h1>

        <div className="my-4">
            {
                testeventdata.map((event, index) => {
                    // return (
                    //     <div data-aos="zoom-in" className="mb-4 rounded shadow-xl bg-white duration-500 p-4 hover:border hover:border-[#560606]/50" key={index}>
                    //         <h1 className="text-xl font-semibold text-[#560606]">{event.name}</h1>
                    //         <p className="pt-2">{event.decs}</p>

                    //         <div className="flex justify-between pt-4">
                    //             <div className="">
                    //                 <a href={event.link}>
                    //                     <h1 className="text-[#e8b910] font-semibold hover:text-[#560606] duration-500">Read More</h1>
                    //                 </a>
                    //             </div>
                    //             <div className="">
                    //                 <h1 className="text-gray-500">{event.date}</h1>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )

                    return (
                        <div data-aos="zoom-in" className="h-auto md:mx-4 my-4 shadow-xl rounded md:ml-4 w-full relative bg-white bg-cover bg-center py-32  group overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                <h1 className="text-xl font-semibold text-[#560606]">{event.name}</h1>
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