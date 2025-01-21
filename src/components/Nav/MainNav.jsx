import React from 'react'
import UopLogo from '../../assets/uoplogo.png'
import MainNavData from './DataNav'

const MainNav = () => {
  return (
    <div className='md:px-28 px-4 py-4 bg-[#560606] text-white'>        
        <div className="flex justify-between">
            <div className="">
                <img src={UopLogo} alt="" className='md:h-20 h-12 w-auto'/>
            </div>
            <div className="py-6">
                <div className="md:block hidden">
                    <div className="flex">
                        {
                            MainNavData.map((item, index) => {
                                return(
                                    <div className="mx-2 font-semibold" key={index}>
                                        <div className="flex">
                                            <p className='mr-4'><a href={item.link}>{item.name}</a></p> 
                                            {
                                                item.id === 5 ?
                                                <div className=""></div>
                                                :
                                                <div className="">|</div>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainNav