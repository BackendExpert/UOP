import React, { useEffect, useState } from 'react';
import useResData from '../../components/ReseachSection/ResearchAllData';
import { FaCheck } from 'react-icons/fa';

const RSPage = () => {
    const researchdata = useResData();
    const [visiableRes, setvisiableRes] = useState([]);

    useEffect(() => {
        const updateVisiblRes = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setvisiableRes(researchdata.slice(0, 8));
            } else if (screenWidth < 768) {
                setvisiableRes(researchdata.slice(0, 1));
            } else {
                setvisiableRes(researchdata.slice(0, 8));
            }
        };

        updateVisiblRes();
        window.addEventListener('resize', updateVisiblRes);
        return () => window.removeEventListener('resize', updateVisiblRes);
    }, [researchdata]);

    return (
        <div className='xl:px-28 px-4 my-8 bg-gray-200 py-16'>
            <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">
                Research and Innovation
            </h1>
            <div className="text-center py-8 font-semibold">
                The University of Peradeniya pioneers transformative research and creative innovations, advancing knowledge to address global and local challenges.
            </div>

            {/* Research Stats Section */}
            <div className="flex mb-8">
                <div data-aos="zoom-in" className="md:my-0 my-2 w-full bg-white p-4 md:ml-2 rounded shadow-md">
                    <div className="bg-white md:p-8 p-4 rounded-xl shadow-md">
                        <table className='w-full text-gray-500'>
                            <tbody>
                                {[
                                    { label: 'Research Publications', value: '13,000+' },
                                    { label: 'Citations', value: '269,000+' },
                                    { label: 'Research Ranking', value: 'Ranked 1,879' },
                                    { label: 'Research Disciplines', value: 'Ranked 63rd globally for Classics and Ancient History, 194th for Publishing.' },
                                    { label: 'Number of researchers in the top 2% of world scientists', value: '9' },
                                    { label: 'Annual Research Conferences', value: '600+ abstracts' },
                                    { label: 'Research Collaborations', value: '20+' },
                                    { label: 'Postgraduate Research Programmes', value: '50+' },
                                    { label: 'Research Awards and Recognitions', value: '10-15 (National and international)' },
                                    { label: 'Number of Patents Filed', value: '10-15 patents filed annually' },
                                    { label: 'Major Annual Conferences', value: '6+' },
                                    { label: 'Workshops/Seminars', value: '15+ workshops/seminars annually' }
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td className='font-semibold flex items-center'>
                                            <FaCheck className="mr-2 text-green-600" />
                                            {item.label}
                                        </td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Featured Research Section */}
                {visiableRes.length > 1 && (
                    <div className="w-full ml-4">
                        <div data-aos="zoom-in" className="bg-white shadow-2xl">
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0)), url(${import.meta.env.VITE_APP_API}/${visiableRes[1]?.res_img})`
                                    }}
                                    className="rounded-t-xl w-full relative bg-cover bg-center py-28 text-center text-white group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-4 border border-gray-100">
                                    <h1 className="text-xl font-semibold">{visiableRes[1]?.res_titile}</h1>
                                    <p>{visiableRes[1]?.res_desc}</p>
                                    <div className="mt-4">
                                        <a href={visiableRes[1]?.res_link} target='_blank'>
                                            <button className='bg-[#560606] py-2 px-4 rounded-full shadow-xl text-white duration-500 hover:px-6'>
                                                Read More
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Research List */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
                {visiableRes.map((data, index) => (
                    <div data-aos="zoom-in" className="bg-white shadow-2xl" key={index}>
                        <div>
                            <div
                                style={{
                                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0)), url(${import.meta.env.VITE_APP_API}/${data.res_img})`
                                }}
                                className="rounded-t-xl w-full relative bg-cover bg-center py-28 text-center text-white group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-4 border border-gray-100">
                                <h1 className="text-xl font-semibold">{data.res_titile}</h1>
                                <p>{data.res_desc}</p>
                                <div className="mt-4">
                                    <a href={data.res_link} target='_blank'>
                                        <button className='bg-[#560606] py-2 px-4 rounded-full shadow-xl text-white duration-500 hover:px-6'>
                                            Read More
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* All Research Button */}
            <center className='mt-4'>
                <a href="/RsearchAll">
                    <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>
                        All Research and Innovation
                    </button>
                </a>
            </center>
        </div>
    );
};

export default RSPage;
