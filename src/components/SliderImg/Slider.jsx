import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.png'
import UopSci from '../../assets/UopSci.jpg'

import UopImg1 from '../../assets/top2.jpg'
import UopImg2 from '../../assets/URS.jpg'
import UopImg3 from '../../assets/IEEEAwards2022.jpg'
import UopImg4 from '../../assets/Lperadeniyae.jpg'
import UopImg5 from '../../assets/12.jpg'
import UopImg6 from '../../assets/13.jpg'
import UopImg7 from '../../assets/14.jpg'

const Slider = () => {
    const images = [
        UopSci,
        UopImg1,
        UopImg2,
        UopImg3,
        UopImg4,
        UopImg5,
        UopImg6,
        UopImg7
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] verflow-hidden bg-gray-100">

        <div className="relative w-full h-full">
        {images.map((image, index) => (
            <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity ${
                currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
            />
        ))}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <center>
                <h1 className="text-3xl font-semibold text-white mb-2">Welcome to</h1>
                <img src={logo} alt="" className="h-40 w-auto" />
                <h1 className="text-2xl font-semibold text-white mt-4">University of Peradeniya</h1>
                </center>
            </div>
        </div>




      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;


