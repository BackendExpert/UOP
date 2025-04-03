import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const HorizontalScroll = ({ setSelectedImage }) => {
  const scrollRef = useRef(null);
  const [imagedata, setImagedata] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_API + '/programsilder.php', {
      params: { action: "getallImages" },
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(res => {
        if (res.data.Result) {
          setImagedata(res.data.Result);
        } else {
          setImagedata([]);
        }
      })
      .catch(err => {
        console.log(err);
        setImagedata([]);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Images Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar px-6"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {imagedata.map((image, index) => {
          const imgeview = `${import.meta.env.VITE_APP_API}/${image.img}`; // Define image URL

          return (
            <div key={index} className="relative">
              {/* Image Button with Link */}
              <button
                className="w-60 h-80 mx-2 cursor-pointer rounded-md transition-transform transform hover:scale-105"
                onClick={() => setSelectedImage(imgeview)} // Pass the image URL to the modal
              >
                <img
                  src={imgeview} // Use the image URL variable
                  alt={`Event ${image.id}`}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => e.target.src = '/path/to/fallback-image.jpg'} // Fallback image
                />
              </button>

              {/* Button to open image in a new tab */}
              <a
                href={image.link} // Link to the image
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-1 px-3 rounded-full text-xs"
              >
                View More
              </a>
            </div>
          );
        })}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HorizontalScroll;
