import React, { useEffect, useState } from 'react'
import { secNavData } from './DataNav'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import uoplogo from '../../assets/uoplogo.png'

const SecNav = () => {
    const [menuopen, setmenuopen] = useState(false)
    const [atTop, setAtTop] = useState(true);

    const headleopenmenu = () => {
        setmenuopen(!menuopen)
    }

    const checkScroll = () => {
        if (window.scrollY === 0) {
            setAtTop(true);
        } else {
            setAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);


  return (
    <div className="">
        <div className='md:px-28 px-4 py-4 bg-[#560606] text-white'>
            <div className="flex justify-between">
                <div className="">
                    {
                        !atTop ?
                            <div className="">
                                <img src={uoplogo} alt="" className='h-10 w-auto'/>
                            </div>
                        :
                            <div className=""></div> 
                    }

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

        <div 
            className={`p-8 w-auto absolute ${atTop ? 'top-48' : 'top-[75px]' } right-8 ml-8 bg-[#560606] text-white shadow-lg rounded-lg p-4 transform transition-opacity duration-300 ease-in-out ${
                menuopen ? 'opacity-100' : 'opacity-0 pointer-events-none' 
            }`}
        >         
            <div className="md:grid grid-cols-4 gap-4 ">
                {
                    secNavData.map((data, index) => {
                        return (
                             <div className="" key={index}>
                                <div className="">
                                    {
                                        (() => {
                                            if(data.id && Array.isArray(data.submenu) && data.submenu.length > 0 ){
                                                return(
                                                    <div className="">
                                                        <h1 className="text-xl font-semibold">{data.name}</h1> 
                                                    </div>
                                                )
                                            }
                                            else{
                                                return(
                                                    <a href={data.link}>
                                                        <h1 className="text-xl font-semibold">{data.name}</h1>                                                    
                                                    </a>
                                                )
                                            }
                                        })()
                                    }
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

export default SecNav