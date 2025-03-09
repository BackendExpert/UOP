import React from 'react'
import useEventData from '../../components/Events/EventData'

const Events = () => {
    const eventdata = useEventData()
  return (
    <div>
        <h1 className="text-2xl font-semibold uppercase text-[#560606] mt-4">Events</h1>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {
                eventdata.map((event, index) => {
                    const date = new Date(event.event_date);
                    const year = date.getFullYear();
                    const month = date.toLocaleString("en-US", { month: "long" });
                    const day = date.getDate().toString();
                    const imageUrl = event.event_img 
                    return (
                        <div
                        key={index}
                        data-aos="zoom-in"
                        style={{ backgroundImage: `url(${import.meta.env.VITE_APP_API}/${event.event_img})` }}
                        className={`
                          bg-cover bg-center h-auto my-4 shadow-xl rounded w-full relative bg-white py-32 group overflow-hidden
                          
                          // Show only the first item on mobile (sm)
                          ${index > 0 ? 'hidden sm:block' : ''}
                
                          // Show only the first 8 items on medium (md), hide the 9th item (index 8)
                          ${index >= 8 ? 'hidden md:block' : ''}
                
                          // Show all items on extra-large (xl)
                          ${index >= 9 ? 'hidden xl:block' : ''}
                        `}
                      >
                
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                <div className="text-xs text-center p-2 rounded-md absolute top-2 right-4 text-white font-semibold bg-gray-500">
                                    <h1 className="">{year}</h1>
                                    <h1 className="">{month}</h1>
                                    <h1 className="">{day}</h1>
                                </div>
                                <h1 className="text-xl font-semibold text-white">{event.event_title}</h1>
                            </div>
                            <div className="p-4 absolute bg-[#e8b910] inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <div className="relative ">
                                    <h1 className="text-xl text-[#560606] font-bold">{event.event_title}</h1>
                                    <p className="text-[#560606]">{event.envet_desc}</p>
                                    <a href={event.event_link}>
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