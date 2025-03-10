import React, { useEffect, useState } from 'react'
import useResData from '../../components/ReseachSection/ResearchAllData'


const RSPage = () => {
    const researchdata = useResData()

    const [visiableRes, setvisiableRes] = useState([]);
    useEffect(() => {
        const updateVisiblRes = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1280) { // Extra-large screens (desktop)
                setvisiableRes(researchdata.slice(0, 8)); // Show first 9 events
            } else if (screenWidth < 768) { // Mobile screens
                setvisiableRes(researchdata.slice(0, 1)); // Show only 1 event
            } else { // Medium screens (tablet)
                setvisiableRes(researchdata.slice(0, 8)); // Show first 9 events
            }
        };

        updateVisiblRes();
        window.addEventListener('resize', updateVisiblRes);

        return () => window.removeEventListener('resize', updateVisiblRes);
    }, [researchdata]);      
  return (
    <div className='xl:px-28 px-4 my-8 bg-gray-200 py-16'>
        <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Research and Innovation</h1>
        <div className="text-center py-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis optio dolorum exercitationem labore consectetur deleniti, sint possimus sequi est alias dolor, repellendus reiciendis! Nobis debitis placeat delectus, tempore esse ab.</div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
            {
                visiableRes.map((data, index) => {
                    return (
                        <div data-aos="zoom-in" className="bg-white shadow-2xl" key={index}>
                            <div className="">
                                <div                                      
                                    style={{ backgroundImage: `url(${import.meta.env.VITE_APP_API}/${data.res_img})` }}
                                    className="rounded-t-xl w-full relative bg-cover bg-center py-28 text-center text-white group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-4 border border-gray-100">
                                    <h1 className="text-xl font-semibold">{data.res_titile}</h1>
                                    {data.res_desc}

                                    <div className="mt-4">
                                        <a href={data.res_link} target='_blank'>
                                            <button className='bg-[#560606] py-2 px-4 rounded-full shadow-xl text-white duration-500 hover:px-6'>Read More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <center className='mt-4'>
            <a href="/RsearchAll" >
                <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All Research and Innovation</button>
            </a>
        </center>

    </div>
  )
}

export default RSPage