import React from 'react'

const JanNewYear = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='md:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-16 text-center text-white'>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="relative">
            <h1 className="py-2 text-2xl sg-font">A new year is a blank page, write your best story yet</h1>
            <h1 className="py-2 text-2xl">May this year be filled with new adventures and academic achievements</h1>
            <h1 className="uppercase sg-font py-2">Happy New Year {currentYear}</h1>
        </div>
    </div>
  )
}

const Aprilfunction = () => {
        const currentYear = new Date().getFullYear();
    return (
    <div className='md:px-28 px-4 relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-16 text-center text-white'>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="relative">
            <h1 className="py-2 text-2xl sg-font">Have an Enjoyable New Year !!!</h1>
            <h1 className="py-2 text-2xl">Wishing you a very Happy & Blessed Sinhala & Tamil New Year, May this New Year bring you much Happiness & Prosperity</h1>
            <h1 className="uppercase sg-font py-2">{currentYear}</h1>
        </div>
    </div>
    )
}

const WasakFunction = () => {
        const currentYear = new Date().getFullYear();
    return (
    <div className='relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-16 text-center text-white'>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="relative">
            <h1 className="py-2 text-2xl sg-font">Happy Vesak Festival !!!</h1>
            <h1 className="py-2 text-2xl">"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."</h1>
            <h1 className="uppercase sg-font py-2">{currentYear}</h1>
        </div>
    </div>
    )
}

const AssalaPerahera = () => {
    const currentYear = new Date().getFullYear();
    return (
    <div className='relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-16 text-center text-white'>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="relative">
            <h1 className="py-2 text-2xl sg-font">Wishing you blessings during this sacred Esala season.!!!</h1>
            <h1 className="py-2 text-2xl">The Kandy Perahera, where devotion meets celebration in the heart of Sri Lanka’s sacred city.</h1>
            <h1 className="uppercase sg-font py-2">{currentYear}</h1>
        </div>
    </div>
    )
}

const MarryCrismistmas = () => {
    const currentYear = new Date().getFullYear();
    return (
    <div className='relative bg-[url(https://wallpapercave.com/wp/wp11704432.jpg)] bg-cover bg-center py-16 text-center text-white'>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="relative">
            <h1 className="py-2 text-2xl sg-font">Merry Christmas</h1>
            <h1 className="py-2 text-2xl">Merry Christmas! May your season be filled with joy, peace, and love.</h1>
            <h1 className="uppercase sg-font py-2">{currentYear}</h1>
        </div>
    </div>
    )
}

export { JanNewYear, Aprilfunction, WasakFunction, AssalaPerahera, MarryCrismistmas }