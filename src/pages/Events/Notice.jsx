import React, { useEffect, useState } from 'react'
import useNoticeData from '../../components/Notice/NoticeData'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const Notice = () => {
    const noticedata = useNoticeData();

    const [visibaleNotice, setvisibaleNotice] = useState([]);
    useEffect(() => {
        const updateVisibleNotice = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1280) { // Extra-large screens (desktop)
                setvisibaleNotice(noticedata.slice(0, 9)); // Show first 9 events
            } else if (screenWidth < 768) { // Mobile screens
                setvisibaleNotice(noticedata.slice(0, 1)); // Show only 1 event
            } else { // Medium screens (tablet)
                setvisibaleNotice(noticedata.slice(0, 9)); // Show first 9 events
            }
        };

        updateVisibleNotice();
        window.addEventListener('resize', updateVisibleNotice);

        return () => window.removeEventListener('resize', updateVisibleNotice);
    }, [noticedata]);
    return (
        <div>
            <h1 className="text-2xl font-semibold uppercase text-[#560606] mt-4">Notice</h1>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    visibaleNotice.map((notice, index) => (
                        <div
                            data-aos="zoom-in"
                            key={index}
                            className={`${index !== 0 ? 'hidden md:block' : ''} min-h-56 bg-gradient-to-br from-[#ADD8E6]/50 via-[#FFFFFF] to-[#FFB6C1]/50 p-4 rounded my-4 shadow-xl duration-500 hover:border hover:border-[#560606]/20`}
                        >
                            
                            <h1 className="text-[#560606] font-semibold text-xl ">{notice.notice_title}</h1>

                            {/* Uncomment this if you want to display the notice description */}
                            {/* <p className="mt-2">{notice.notice_desc}</p> */}

                            <div className="flex justify-between items-center mt-4">
                                <a href={notice.notice_link} target="_blank" rel="noopener noreferrer">
                                    <DefaultBtn type="button" btnvalue="Read More" />
                                </a>
                                <div className="text-sm text-gray-500">{notice.notice_date}</div>
                            </div>
                        </div>
                    ))
                }


            </div>
            <center>
                <a href="/Notices">
                    <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All Notices</button>
                </a>
            </center>
        </div>
    )
}

export default Notice