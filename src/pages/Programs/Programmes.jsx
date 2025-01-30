import React from 'react'
import { programData } from '../../components/ProgramData/ProgramData'
import DefaultBtn from '../../components/Buttons/DefaultBtn'

const Programmes = () => {
  return (
    <div className='bg-gray-200 py-8 lg:px-28 px-4'>
        <div  data-aos="zoom-in" className="lg:mb-0 mb-8 w-full lg:px-16 px:8 lg:flex items-center justify-center">
            <div className="">
                <h1 className="uppercase text-center text-[#560606] font-semibold text-3xl">Study at UOP</h1>

                <p className="my-4 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit enim voluptatem a numquam? Obcaecati nam fugit delectus excepturi sint amet nostrum consequuntur, earum minima nisi aliquid error? Quibusdam, nam!
                </p>
            </div>
        </div>
        <div className="">
    {programData.map((program, index) => (
        <div className="lg:flex my-2 py-8" key={index}>
            {/* Left Section - Program Info */}
            <div className="flex justify-center items-center lg:w-1/3 w-full">
                <div data-aos="zoom-in" className="w-full p-8 rounded shadow-xl text-center bg-white">
                    <h1 className="uppercase text-[#560606] font-semibold text-center py-4">
                        {program.name}
                    </h1>
                    <p>{program.desc}</p>
                </div>
            </div>

            {/* Right Section - Courses */}
            <div className="w-full lg:ml-4 mt-4 lg:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-cols-4 gap-4">
                    {program.courses.map((course, courseIndex) => (
                        <div key={courseIndex}>
                            <div 
                                data-aos="zoom-in" 
                                style={{ backgroundImage: `url(${course.img})` }}
                                className="rounded w-full relative bg-cover bg-center py-32 text-center text-white group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
                                
                                {/* Course Name (Initial State) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <h1 className="text-xl font-semibold">{course.name}</h1>
                                </div>

                                {/* Course Details (Hover State) */}
                                <div className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="relative">
                                        <h1 className="text-xl font-bold">{course.name}</h1>
                                        <p>{course.desc}</p>

                                        {course.link && (
                                            <a href={course.link}>
                                                <button className="mt-4 bg-white py-1 px-4 rounded text-black">
                                                    Read More
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ))}
</div>

        {/* <div className="lg:flex mr-4">

            <div className="lg:w-1/2">
                <div className="lg:flex ">

                    <div  data-aos="zoom-in" className="rounded lg:my-0 my-4 lg:mr-4 w-full lg:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
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

                    <div  data-aos="zoom-in" className="rounded lg:ml-4 w-full lg:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
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
                <div  data-aos="zoom-in" className="rounded mt-4 w-full lg:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-32 text-center text-white group overflow-hidden">
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
        </div> */}
    </div>
  )
}

export default Programmes