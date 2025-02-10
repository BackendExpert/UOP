import React from 'react'
import { noticeData } from '../../components/Notice/NoticeData'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const Notice = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold uppercase text-[#560606] mt-4">Notice</h1>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {
                noticeData.map((notice, index) => {
                    return (
                        <div data-aos="zoom-in" className="bg-white p-4 rounded my-4 shadow-xl duration-500 hover:border hover:border-[#560606]/20" key={index}>
                            <h1 className="text-[#560606] font-semibold text-xl">{notice.name}</h1>
                            <p className="mt-2">
                                {notice.desc}
                            </p>

                            <div className="mt-4">
                                <DefaultBtn type={'button'} btnvalue={'Read More'}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <center>
            <a href="#">
                <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All Notices</button>
            </a>
        </center>
    </div>
  )
}

export default Notice