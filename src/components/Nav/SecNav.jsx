import React, { useEffect, useState } from 'react'
import { secNavData } from './DataNav'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import uoplogo from '../../assets/uoplogo.png'
import { FaFacebook, FaYoutube, FaLinkedin, FaChevronDown, FaChevronRight  } from "react-icons/fa";
import { Link } from 'react-router-dom';


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

    const [dksubmenu, setdksubmenu] = useState(false)
    const [dksecsubmenu, setdksecsubmenu] = useState(false)


  return (
    <div className="border-t border-[#e8b910]">
        <div className='md:px-[6%] px-4 py-4 bg-[#560606] text-white'>


        <div className=''>

                
                <div className="flex justify-between">
                    <div className="md:hidden block">
                        <img src={uoplogo} alt="" className='h-8 w-auto'/>
                    </div>  
                    <div className="md:hidden block flex justify-end">

                        {
                            menuopen === false ? 
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
                

                


                <div className="md:block hidden flex justify-end">
                    <div className="flex relative">
                        {secNavData.map((data, index) => {
                            return (
                                <div
                                    className={`${atTop ? ' mx-[1%] mt-0' : 'mt-1 mx-4'} relative`}
                                    key={index}
                                    onMouseEnter={() => setdksubmenu(data.id)}
                                    onMouseLeave={() => setdksubmenu(false)}
                                >
                                    <div className="flex cursor-pointer">
                                        {data.id && Array.isArray(data.submenu) && data.submenu.length ? (
                                            <div className="flex">
                                                <h1 className={`${atTop ? '' : ''} font-semibold uppercase`}>
                                                    {data.name}
                                                </h1>
                                                <p className="mt-2 ml-2">
                                                    <FaChevronDown className="h-3 w-auto" />
                                                </p>
                                            </div>
                                        ) : (
                                            <div>
                                                <Link to={data.link}>
                                                    <h1 className={`${atTop ? '' : ''} font-semibold uppercase`}>
                                                        {data.name}
                                                    </h1>
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                {/* Submenu */}
                                {dksubmenu === data.id && data.submenu && Array.isArray(data.submenu) && (
                                    <div className="min-w-64 absolute top-full -left-2 bg-[#560606] text-white shadow-lg z-50 pt-4">
                                        {data.submenu.map((submenu, submenuIndex) => (
                                            <div
                                                key={submenuIndex}
                                                className="relative hover:bg-[#e8b910] px-4 cursor-pointer hover:text-[#560606] hover:font-semibold duration-500 hover:pl-6"
                                                onMouseEnter={() => setdksecsubmenu(submenuIndex)} // Track submenu index
                                                onMouseLeave={() => setdksecsubmenu(null)} // Reset on mouse leave
                                            >
                                                {submenu.menusubL && Array.isArray(submenu.menusubL) && submenu.menusubL.length > 0 ? (
                                                    <div className="flex py-4">
                                                        <h1>{submenu.name}</h1>
                                                        <p className="mt-2 ml-2">
                                                            <FaChevronRight className="h-3 w-auto" />
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="py-4">
                                                        <a href={submenu.link}>{submenu.name}</a>
                                                    </div>
                                                )}
                                                {/* Secondary Submenu (menusubL) */}
                                                {dksecsubmenu === submenuIndex && submenu.menusubL && Array.isArray(submenu.menusubL) && (
                                                    <div className="min-w-64 absolute top-0 left-full bg-[#560606] text-white  shadow-lg z-64">
                                                        {submenu.menusubL.map((subData, submenuLindex) => (
                                                            <a href={subData.link} className="">
                                                                <h1 key={submenuLindex} className="px-4 py-4 hover:bg-[#e8b910] hover:text-[#560606]">
                                                                    {subData.name}
                                                                </h1>
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

 
                                </div>
                            );
                        })}
                    </div>
                    
                </div>

            </div>      
        </div>
        




        <div 
            className={`pb-12 md:my-4 my-8 p-8 w-auto absolute mt-2 right-8 ml-8 bg-[#560606] text-white shadow-lg rounded-lg p-4 transform transition-opacity duration-300 ease-in-out ${
                menuopen ? 'opacity-100' : 'opacity-0 pointer-events-none' 
            }`}
        >
     
            <div className="md:grid grid-cols-4 gap-4 max-h-screen overflow-y-auto scrollbar-hidden">
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
                                                        <h1 className="text-xl font-semibold mb-4 uppercase">{data.name}</h1> 

                                                        {
                                                            data.submenu?.map((submenu, submenuIndex) => (
                                                                <div key={submenuIndex}>
                                                                    <a href=""><h2 className="pl-2 font-medium text-lg py-4 underline">{submenu.name}</h2></a>
                                                                    
                                                                    <ul>
                                                                        {submenu.menusubL?.map((item, itemIndex) => (
                                                                            <li key={itemIndex} className='pl-6 py-2'>
                                                                                <a href={item.link} className="hover:underline">
                                                                                    {item.name}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))
                                                        }
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
                <div className="my-16"></div>
            </div>
        </div>
    </div>
  )
}

export default SecNav