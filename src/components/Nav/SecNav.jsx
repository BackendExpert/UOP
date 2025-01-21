import React, { useState } from 'react'
import { secNavData } from './DataNav'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const SecNav = () => {
    const [menuopen, setmenuopen] = useState(false)

    const headleopenmenu = () => {
        setmenuopen(!menuopen)
    }

  return (
    <div className='md:px-28 px-4 py-4 bg-[#560606] text-white'>
        <div className="flex justify-between">
            <div className="">

            </div>
            <div className="">
                {
                    menuopen === false? 
                    <div className="cursor-pointer">
                        <TiThMenu className='h-8 w-auto fill-white' onClick={headleopenmenu}/>
                    </div>
                    :
                    <div className="cursor-pointer">
                        <IoClose className='h-8 w-auto fill-white' onClick={headleopenmenu}/>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SecNav