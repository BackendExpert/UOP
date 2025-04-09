import React, { useState } from 'react';
import { society } from '../../components/SocietyData/SocietyData';

const Society = () => {
    const [selectedTab, setSelectedTab] = useState("Faculty of Agriculture");

    const selectedFaculty = society.find((item) => item.faculty === selectedTab);

    return (
        <div className='xl:px-24 px-4 mt-14 bg-gray-200'>
            <div className="py-8">
                {/* Tabs */}
                <div className="grid grid-cols-5 gap-0">
                    {
                        society.map((data, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedTab(data.faculty)}
                                className={`m-2 rounded-md shadow-md duration-500 hover:shadow-xl text-white text-center cursor-pointer py-4 
                                    ${selectedTab === data.faculty
                                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-400'
                                        : 'bg-gradient-to-r from-blue-600 to-sky-500'
                                    }`}
                            >
                                {data.faculty}
                            </div>
                        ))
                    }
                </div>

                {/* Societies under selected tab */}
                <div className="my-4">
                    <div className="grid grid-cols-4 gap-4">
                        {
                            selectedFaculty?.societies.map((soc, idx) => (
                                <a
                                    key={idx}
                                    href={soc.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="m-2 rounded-md shadow-md duration-500 hover:shadow-xl bg-gradient-to-r from-green-600 to-lime-500 text-white text-center cursor-pointer py-8 px-4"
                                >
                                    {soc.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Society;
