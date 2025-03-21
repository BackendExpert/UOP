import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

export default function HorizontalScroll() {
  const scrollRef = useRef(null);
  const [imagedata, setimagedata] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_API + '/programsilder.php', {
        params: { action: "getallImages" },
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => {
        console.log(res.data);
        if (res.data.Result) {
            setimagedata(res.data.Result);
        } else {
            setimagedata([]);
        }
    })
    .catch(err => {
        console.log(err);
        setimagedata([]);
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.addEventListener("scroll", handleInfiniteScroll);
      return () => container.removeEventListener("scroll", handleInfiniteScroll);
    }
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      container.scrollLeft = container.scrollWidth / 4;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  // Create a reversed version of the image data
  const reversedImages = imagedata.slice().reverse();

  // Open Modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div data-aos="zoom-in" className="relative w-full mx-auto overflow-hidden">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable University Programmes Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar px-6"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reversedImages.map((image, index) => (
          <div
            key={index}
            className="relative xl:min-w-[calc(100%/4)] md:min-w-[calc(100%/3)] min-w-[calc(100%/1)] aspect-[2/3] bg-cover bg-center flex-shrink-0 group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${import.meta.env.VITE_APP_API}/${image.img})`, scrollSnapAlign: "start" }}
            onClick={() => openModal(image)} // Open modal on click
          >
            {/* Always Visible Overlay with Program Details */}
            <div className="absolute bottom-0 h-auto left-0 w-full bg-black bg-opacity-70 text-white text-center py-4 px-2">
              <h3 className="text-lg font-bold">{image.title}</h3>
              <p className="text-sm opacity-80">{image.pdesc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>

      {/* Modal for Image (Full Screen) */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-20">
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold"
              onClick={closeModal}
            >
              X
            </button>
            {/* Image in full-screen */}
            <img
              src={`${import.meta.env.VITE_APP_API}/${selectedImage.img}`}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
