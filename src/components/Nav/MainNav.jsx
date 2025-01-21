import React from 'react'
import UopLogo from '../../assets/uoplogo.png'
import MainNavData from './DataNav'

const MainNav = () => {
  return (
    <div className='md:px-28 px-4 py-4'>        
        <div className="flex justify-between">
            <div className="">
                <img src={UopLogo} alt="" className='h-20 w-auto'/>
            </div>
            <div className="">
                <div className="md:block hidden">
                    <div className="flex">
                        {
                            MainNavData.map((item, index) => {
                                return(
                                    <div className="" key={index}>
                                        {item.name}
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