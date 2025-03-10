import React from 'react';
import { programData } from '../../components/ProgramData/ProgramData';
import DefaultBtn from '../../components/Buttons/DefaultBtn';
import HorizontalScorll from './HorizontalScorll';

const Programmes = () => {
  return (
    <div className='bg-white py-8 xl:px-24 px-4'>
      <div data-aos='zoom-in' className='xl:mb-0 mb-8 w-full xl:px-16 px-8 xl:flex items-center justify-center'>
        <div>
          <h1 className='uppercase text-center text-[#560606] font-semibold text-3xl mb-8'>Study at UOP</h1>
        </div>
      </div>

      <div className="flex mb-4 justify-between" data-aos="zoom-in">
        <div className="w-full">
          <a href="">
            <button className='bg-[#560606] text-[#e8b910] py-2 rounded w-full mr-2'>Programs for Sri Lankan Students</button>
          </a>
        </div>
        <div className="w-full">
          <a href="">
            <button className='bg-[#560606] text-[#e8b910] py-2 rounded w-full ml-2'>Programs for International Students</button>
          </a>
        </div>
      </div>

      {programData.map((program, index) => (
        <div key={index} className='mb-10'>
          <div className='grid xl:grid-cols-5 md:grid-cols-2 gap-0'>
            <div className='w-full h-64 flex'>
              <div data-aos='zoom-in' className='w-full p-6 shadow-xl text-center bg-gray-200'>
                <h1 className='uppercase text-[#560606] font-semibold text-center py-4'>{program.name}</h1>
                <p>{program.desc}</p>
              </div>
            </div>

            {program.courses.map((course, courseIndex) => (
              <div key={courseIndex} className='w-full'>
                <div
                  data-aos='zoom-in'
                  style={{ backgroundImage: `url(${course.img})` }}
                  className='w-full relative h-64 bg-cover bg-center py-24 text-center text-white group overflow-hidden'
                >
                  <div className='absolute inset-0 bg-black opacity-40 group-hover:opacity-80 transition-opacity duration-500'></div>

                  <div className='absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500'>
                    <h1 className='text-xl font-semibold'>{course.name}</h1>
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                    <div className='relative text-center p-4 rounded-lg shadow-lg text-white'>
                      <h1 className='text-xl font-bold'>{course.name}</h1>
                      <p className='mt-2'>{course.desc}</p>
                      {course.link && (
                        <a href={course.link}>
                          <button className='mt-4 bg-[#560606] text-white py-1 px-4 rounded hover:bg-red-700 transition'>Read More</button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <HorizontalScorll />
      </div>
    </div>
  );
};

export default Programmes;