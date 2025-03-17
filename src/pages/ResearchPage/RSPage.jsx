import React, { useEffect, useState } from 'react'
import useResData from '../../components/ReseachSection/ResearchAllData'
import { FaCheck } from 'react-icons/fa'
import { researchstats } from '../RsearchAll/ResearchStatus'


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
            <div className="text-center py-8 font-semibold">The University of Peradeniya pioneers transformative research and creative innovations, advancing knowledge to address global and local challenges.</div>


            <div className="flex mb-8">
                <div data-aos="zoom-in" className="p-4 py-8 md:my-0 my-2 w-full bg-white p-4 md:mr-2 rounded shadow-md">
                    <div className="grid xl:grid-cols-3 md:grid-cols-3 gap-6">
                        {
                            researchstats.map((data, index) => {
                                return (
                                    <div className="" key={index}>
                                        <center>
                                            <data.icon className='h-12 w-full fill-[#560606]' />
                                            <a href={data.link}>
                                                <h1 className="mt-8 text-xl text-gray-500 font-semibold duration-500 hover:text-[#e8b910]">{data.name}</h1>
                                            </a>
                                        </center>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div data-aos="zoom-in" className="md:my-0 my-2 w-full bg-white p-4 md:ml-2 rounded shadow-md">
                    <div className="bg-white md:p-8 p-4 rounded-xl shadow-md">
                        <table className='w-full text-gray-500'>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span> Research Publications</td>
                                <td>13,000+</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Citations </td>
                                <td>269,000+</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Research Ranking</td>
                                <td>Ranked 1,879</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Research Disciplines</td>
                                <td>Ranked 63rd globally for Classics and Ancient History, 194th for Publishing. </td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Number of researchers in the top 2% of world scientists</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Annual Research Conferences</td>
                                <td>600+ abstracts </td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Research Collaborations</td>
                                <td>20 +</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Postgraduate Research Programmes</td>
                                <td>50+</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Research Awards and Recognitions</td>
                                <td>10-15 (National and international)</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Number of Patents Filed</td>
                                <td>15-10 patents filed annually</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Major Annual Conferences</td>
                                <td>6+</td>
                            </tr>
                            <tr>
                                <td className='font-semibold flex'><span className='mr-2'><FaCheck /></span>Workshops/Seminars</td>
                                <td>15+ workshops/seminars annually </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

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