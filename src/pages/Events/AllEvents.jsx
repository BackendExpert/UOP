import React, { useEffect, useState } from 'react'
import useEventData from '../../components/Events/EventData';


const AllEvents = () => {
    const eventdata = useEventData();
    const [visibleEvents, setVisibleEvents] = useState([]);

    useEffect(() => {
        const sortedEvents = eventdata.sort((a, b) => new Date(b.event_date) - new Date(a.event_date));
        setVisibleEvents(sortedEvents);
    }, [eventdata]);

    return (
        <div className='xl:px-24 px-4 mt-14 bg-gray-200'>
            <div className="py-8">
                <div className=""></div>
                <div className="mt-8">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            visibleEvents.map((event, index) => {
                                const date = new Date(event.event_date);
                                const year = date.getFullYear();
                                const month = date.toLocaleString("en-US", { month: "long" });
                                const day = date.getDate().toString();

                                return (
                                    <div
                                        key={index}
                                        data-aos="zoom-in"
                                        style={{ backgroundImage: `url(${import.meta.env.VITE_APP_API}/${event.event_img})` }}
                                        className="bg-cover bg-center h-auto my-4 shadow-xl rounded w-full relative bg-white py-32 group overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                            <div className="text-xs text-center p-2 rounded-md absolute top-2 right-4 text-white font-semibold bg-gray-500">
                                                <h1 className="">{year}</h1>
                                                <h1 className="">{month}</h1>
                                                <h1 className="">{day}</h1>
                                            </div>
                                            <div className="backdrop-blur-md bg-opacity-20 rounded-md bg-white text-center p-3 mx-2">
                                                <h1 className="text-white font-semibold text-xl">{event.event_title}</h1>
                                            </div>

                                        </div>
                                        <div className="p-4 absolute bg-[#e8b910] inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="relative">
                                                <h1 className="text-xl text-[#560606] font-bold">{event.event_title}</h1>
                                                <p className="text-[#560606]">{event.envet_desc}</p>
                                                <a href={event.event_link} target='_blank'>
                                                    <h1 className="text-[#560606] duration-500 hover:font-semibold">Read More</h1>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEvents