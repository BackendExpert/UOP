import React from 'react'
import { programData } from '../../components/ProgramData/ProgramData'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const OLDProgrammes = () => {
  return (
    <div className='bg-gray-200 py-8 xl:px-28 px-4'>
        <div className="xl:flex mr-4">
            <div  data-aos="zoom-in" className="xl:mb-0 mb-8 xl:w-1/2 xl:px-16 px:8 xl:flex items-center justify-center">
                <div className="">
                    <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Study at UOP</h1>

                    <p className="my-4 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit enim voluptatem a numquam? Obcaecati nam fugit delectus excepturi sint amet nostrum consequuntur, earum minima nisi aliquid error? Quibusdam, nam!
                    </p>
                </div>
            </div>
            <div className="xl:w-1/2">
                <div className="xl:flex ">

                    <div  data-aos="zoom-in" className="rounded xl:my-0 my-4 xl:mr-4 w-full xl:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                            <h1 className="text-xl font-semibold">{programData[0].name}</h1>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="relative">
                                <h1 className="text-xl font-bold">{programData[0].name}</h1>
                                <p className="">{programData[0].desc}</p>

                                <a href={programData[0].link}>
                                    <div className="">
                                        <button className='mt-4 bg-white py-1 px-4 rounded text-black'>Read More</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div  data-aos="zoom-in" className="rounded xl:ml-4 w-full xl:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                            <h1 className="text-xl font-semibold">{programData[1].name}</h1>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <div className="relative">
                                <h1 className="text-xl font-bold">{programData[1].name}</h1>
                                <p className="">{programData[1].desc}</p>

                                <a href={programData[1].link}>
                                    <div className="">
                                        <button className='mt-4 bg-white py-1 px-4 rounded text-black'>Read More</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
                <div  data-aos="zoom-in" className="rounded mt-4 w-full xl:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        <h1 className="text-xl font-semibold">{programData[2].name}</h1>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <div className="relative">
                            <h1 className="text-xl font-bold">{programData[2].name}</h1>
                            <p className="">{programData[2].desc}</p>

                            <a href={programData[2].link}>
                                <div className="">
                                    <button className='mt-4 bg-white py-1 px-4 rounded text-black'>Read More</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OLDProgrammes