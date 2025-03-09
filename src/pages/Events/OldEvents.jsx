// import React from 'react';
// import { testeventdata } from '../../components/Events/EventData';
// import DefaultBtn from '../../components/Buttons/DefaultBtn';


// const OldEvents = () => {
//   return (
//     <div className="relative z-10 xl:px-28 px-4 py-16 text-[#560606] bg-gray-200">
//         <h1 className="text-center font-semibold text-4xl">Events</h1>      
//         <p className="py-4 text-center">All Upcoming Events of the University will appear here</p>

//         <div className="my-4">
//             <div className="xl:grid grid-cols-4 gap-4 py-8">
//                 {
//                     testeventdata.map((event, index) => {
//                         return (
//                             <div data-aos="zoom-in" className="relative overflow-hidden bg-white xl:my-0 my-4 py-4 rounded-md shadow-xl text-center px-4 duration-500 hover:border-b-4 hover:border-[#e8b910]" key={index}>
//                                 <h1 className="text-xl font-semibold">{event.name}</h1>
//                                 <p className="py-4">
//                                     {event.decs}
//                                 </p>

//                                 <div className="">
//                                     <a href={event.link}>
//                                         <DefaultBtn type={'btn'} btnvalue={'More Info'}/>
//                                     </a>
//                                 </div>

//                                 <div className="pt-4 font-semibold">
//                                     Date: {event.date}
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//             <div className="">
//                 <center>
//                     <a href="#">
//                         <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All Events</button>
//                     </a>
//                 </center>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default OldEvents;
