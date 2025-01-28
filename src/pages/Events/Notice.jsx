import React from 'react'
import { noticeData } from '../../components/Notice/NoticeData'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const Notice = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold uppercase text-[#560606]">Notice</h1>

        <div className="my-4">
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
    </div>
  )
}

export default Notice