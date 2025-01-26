import React from 'react'
import { programData } from '../../components/ProgramData/ProgramData'

const Programs = () => {
  return (
    <div className="bg-gray-200">
        <div className="md:px-28 px-4 py-20">
            <h1 className="my-8 text-center font-semibold text-3xl text-[#560606]">Programs</h1>
            <div className="md:grid grid-cols-3 gap-8">
                {
                    programData.map((program, index) => {
                        return (
                            <div data-aos="zoom-in" className="bg-white py-8 px-4 rounded-md shadow-xl md:my-0 my-4" key={index}>
                                <div className="text-center">
                                    <h1 className="uppercase font-semibold text-center text-[#560606]">{program.name}</h1>
                                    <p className="py-4 text-gray-500">{program.desc}</p>

                                    <div className="py-4">
                                        {
                                            program.courses.map((course, courseindex) => {
                                                return (
                                                    <div className="" key={courseindex}>
                                                        <a href={course.link}>
                                                            <h1 className="text-[#560606] font-bold py-4 duration-500 hover:text-[#e8b910] hover:underline">{course.name}</h1>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Programs