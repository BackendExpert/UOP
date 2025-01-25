import React from 'react'
import { newsdata } from '../../components/News/News'
import { MdDateRange } from "react-icons/md";

const News = () => {
  return (
    <div className='md:px-28 px-4 my-20' data-aos="zoom-in">
        <h1 className="my-8 text-center font-semibold text-3xl text-[#560606]">NEWS</h1>
        <div className="md:flex">
            <div className="w-full mr-4 md:my-0 my-2">
                {
                    newsdata[0].id === 1 ?
                    <div className="">
                        <img src={newsdata[0].img} alt="" />
                        <h1 className="font-semibold text-2xl py-4">{newsdata[0].name}</h1>
                        <p className="">{newsdata[0].desc}</p>
                        <div className="flex justify-between pt-2">
                            <div className="flex">
                                <div className=""><MdDateRange className='h-4 w-auto fill-gray-500' /></div>
                                <p className="text-sm text-gray-500 pl-2">{newsdata[0].date}</p>
                            </div>
                            <div className="">
                                <a href={newsdata[0].link}>
                                    <p className="text-[#e8b910] font-semibold">Read More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=""></div>
                }
            </div>
            <div className="w-full ml-4 md:my-0 my-4">
                {
                    newsdata.map((news, index) => {
                        return (
                            <div className="" key={index}>
                                <div className="md:flex mb-4">
                                    <div className="w-1/3">
                                        <img src={news.img} alt="" />
                                    </div>
                                    <div className="w-full md:ml-4 md:my-0 my-2">
                                        <h1 className="font-semibold text-xl">{news.name}</h1>
                                        <p className="">{news.desc}</p>
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