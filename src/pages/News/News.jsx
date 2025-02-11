import React from 'react'
import { newsdata } from '../../components/News/News'
import { MdDateRange } from "react-icons/md";

const News = () => {
  return (
    <div className='px-4 ' >
        <h1 className="font-semibold text-2xl text-[#560606] mb-1 mt-4">NEWS</h1>
        <div className="xl:flex">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    newsdata.map((news, index) => {
                        return (
                            <div data-aos="zoom-in" className="bg-white my-2 p-4 rounded shadow-xl" key={index}>
                                <div className="">
                                    <div className="">
                                        <img src={news.img} alt="" className='mb-2'/>
                                    </div>
                                    <div className="w-full xl:my-0 my-2">
                                        <h1 className="font-semibold text-xl">{news.name}</h1>
                                        <div className="flex justify-between pt-2">
                                            <div className="flex">
                                                <div className=""><MdDateRange className='h-4 w-auto fill-gray-500' /></div>
                                                <p className="text-sm text-gray-500 pl-2">{news.date}</p>
                                            </div>
                                            <div className="">
                                                <a href={news.link}>
                                                    <p className="text-[#e8b910] font-semibold">Read More</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="">
            <center>
                <a href="#">
                    <button className='bg-[#e8b910] py-2 px-8 rounded font-semibold duration-500 hover:px-4'>All NEWS</button>
                </a>
            </center>
        </div>
    </div>
  )
}

export default News