import React from 'react'
import UopLogo from '../../assets/uoplogo.png'
import { mainNavigation, informationFor, quickLinks } from './FooterData'
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import FB from '../../assets/FB.png'
import X from '../../assets/X.png'
import Inster from '../../assets/Inster.png'
import Youtube from '../../assets/Youtube.png'
import Linkedin from '../../assets/Linked.png'


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#560606] md:px-28 px-4 text-white">
        <div className='py-16'>
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img src={UopLogo} alt="" className='h-20 w-auto'/>

                    <div className="mt-4 ml-8">
                        <p className="py-1 text-lg">University of Peradeniya</p>
                        <p className="py-1 text-lg">Peradeniya</p>
                        <p className="py-1 text-lg">20400</p>
                        <p className="py-1 text-lg">Sri Lanka</p>
                    </div>

                    <div className="mt-4 ml-8">
                        <p className="">Phone : <span>+94 81 238 8301</span></p>
                        <p className="">Fax : <span>+94 81 238 8102</span></p>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <div className="md:grid grid-cols-3 gap-4">
                        <div className="">
                            <div className="w-full md:my-0 my-8">
                                <h1 className="uppercase font-semibold text-xl">main navigation</h1>
                                <hr className='w-3/4 my-2'/>
                                <div className="mt-4">
                                    {
                                        mainNavigation.map((data, index) => {
                                            return (
                                                <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-1 font text-lg' key={index}>
                                                    <a href={data.link}>{data.name}</a>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="w-full md:my-0 my-8">
                                <h1 className="uppercase font-semibold text-xl mt-4">location</h1>
                                <hr className='w-3/4 my-2'/>
                                <div className="mt-4">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8760289680417!2d80.59481527558846!3d7.254947514230262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368deaaaaaaab%3A0xb5476b88282d47fb!2sUniversity%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1738049825365!5m2!1sen!2slk" 
                                        className='h-40 w-auto mt-4'
                                        style={{ border: '1px'}} 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:my-0 my-8">
                            <div className="">
                                <h1 className="uppercase font-semibold text-xl">Information for</h1>
                                <hr className='w-3/4 my-2'/>
                                <div className="mt-8">
                                    {
                                        informationFor.map((data, index) => {
                                            return (
                                                <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-1 font text-lg' key={index}>
                                                    <a href={data.link}>{data.name}</a>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:my-0 my-8">
                            <h1 className="uppercase font-semibold text-xl">Quick Links</h1>
                            <hr className='w-3/4 my-2'/>
                            <div className="mt-8">
                                    {
                                        quickLinks.map((quickLink, index) => {
                                            return (
                                                <ul className='md:ml-0 ml-8 duration-500 hover:pl-2 hover:text-[#e8b910] hover:font-semibold py-1 font text-lg' key={index}>
                                                    <a href={quickLink.link}>{quickLink.name}</a>
                                                </ul>
                                            )
                                        })
                                    }
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:flex justify-center md:space-x-6 mb-4 grid grid-cols-2 gap-2">
            <a href="#" className='duration-500 hover:text-[#e8b910]'>
                <div className="flex">
                    <p className="px-2"><img src={FB} alt="" className='h-8 w-auto'/></p>
                    <h1 className="mt-1">Facebook</h1>
                </div>
            </a>
            <a href="#" className='duration-500 hover:text-[#e8b910]'>
                <div className="flex">
                    <p className="px-2"><img src={X} alt="" className='h-8 w-auto'/></p>
                    <h1 className="mt-1">Twitter</h1>
                </div>
            </a>
            <a href="#" className='duration-500 hover:text-[#e8b910]'>
                <div className="flex">
                    <p className="px-2"><img src={Inster} alt="" className='h-8 w-auto'/></p>
                    <h1 className="mt-1">Instagram</h1>
                </div>
            </a>
            <a href="#" className='duration-500 hover:text-[#e8b910]'>
                    <div className="flex">
                    <p className="px-2"><img src={Youtube} alt="" className='h-8 w-auto'/></p>
                    <h1 className="mt-1">Youtube</h1>
                </div>
            </a>

            <a href="#" className='duration-500 hover:text-[#e8b910]'>
                <div className="flex">
                    <p className="px-2"><img src={Linkedin} alt="" className='h-8 w-auto'/></p>
                    <h1 className="mt-1"mt-1>Linkedin</h1>
                </div>
            </a>
        </div>




        <div className="py-2 px-4 border-t border-[#e8b910] md:text-left text-center">            
            <div className="md:flex justify-between">
                <div className="">
                    Copyright © {currentYear} University of Peradeniya . All rights reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer