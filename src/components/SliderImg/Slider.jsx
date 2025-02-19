import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.png';
import UopSci from '../../assets/UopSci.jpg';
import UopImg1 from '../../assets/top2.jpg';
import UopImg2 from '../../assets/URS.jpg';
import UopImg3 from '../../assets/IEEEAwards2022.jpg';
import UopImg4 from '../../assets/Lperadeniyae.jpg';
import UopImg5 from '../../assets/12.jpg';
import UopImg6 from '../../assets/13.jpg';
import UopImg7 from '../../assets/14.jpg';

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

    const texts = [
        { title: "Welcome!", desc: "Explore the campus and discover our rich history." },
        { title: "Congratulations!", desc: "Nine researchers from the University of Peradeniya are among the top 2% of world scientists." },
        { title: "We are among the world's top universities", desc: "We are proud to be ranked among the top 501-600 universities." },
        { title: "Congratulations!", desc: "IEEE Regional Exemplary Student Branch Award 2022 has been secured by the University of Peradeniya" },
        { title: "Student Life", desc: "Experience the vibrant culture at University of Peradeniya." },
        { title: "Legacy of Excellence", desc: "A journey of academic achievements and innovation." },
        { title: "Future Leaders", desc: "We are shaping the leaders of tomorrow." },
        { title: "Join Us", desc: "Be a part of our journey towards greatness." }
    ];

    const buttons = [
        { text: "Visit Campus", link: "/campus" },
        { text: "Learn More", link: "/about" },
        { text: "Research", link: "/research" },
        { text: "IEEE Awards", link: "/ieee" },
        { text: "Student Life", link: "/life" },
        { text: "History", link: "/history" },
        { text: "Our Vision", link: "/vision" },
        { text: "Join Us", link: "/join" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[80vh] overflow-hidden bg-gray-100">
            {/* Image Slider */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                            currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

                {/* Text Content & Button */}
                <div className="absolute inset-0 z-20 md:my-48 my-20 md:ml-16 px-6">
                    <h1 className="text-4xl font-bold text-white mb-2">{texts[currentIndex].title}</h1>
                    <p className="text-lg text-white max-w-2xl mb-6">{texts[currentIndex].desc}</p>
                    <a
                        href={buttons[currentIndex].link}
                        className="px-6 py-3 bg-[#560606] text-white rounded text-lg hover:bg-[#560606] transition duration-300"
                    >
                        {buttons[currentIndex].text}
                    </a>
                </div>

                {/* Left Arrow */}
                <button
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-70"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-70"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-[#560606]" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
