import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const movies = [
  { title: "The Covenant", image: "https://wallpapercave.com/wp/wp4991568.jpg" },
  { title: "Black Demon", image: "https://wallpapercave.com/wp/wp4991569.jpg" },
  { title: "The Tank", image: "https://wallpapercave.com/wp/wp4327154.jpg" },
  { title: "The Little Mermaid", image: "https://wallpapercave.com/wp/wp4991580.jpg" },
  { title: "65", image: "https://wallpapercave.com/wp/wp4991602.jpg" },
  { title: "The Covenant", image: "https://wallpapercave.com/wp/wp4991568.jpg" },
  { title: "Black Demon", image: "https://wallpapercave.com/wp/wp4991569.jpg" },
  { title: "The Tank", image: "https://wallpapercave.com/wp/wp4327154.jpg" },
  { title: "The Little Mermaid", image: "https://wallpapercave.com/wp/wp4991580.jpg" },
  { title: "65", image: "https://wallpapercave.com/wp/wp4991602.jpg" },
];

export default function HorizontalScroll() {
    const scrollRef = useRef(null);

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
        const scrollAmount = direction === "left" ? -clientWidth / 4 : clientWidth / 4;
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
      }
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

          {/* Scrollable Movies Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...movies, ...movies].map((movie, index) => (
              <div
                key={index}
                className="relative xl:min-w-[calc(100%/4)] md:min-w-[calc(100%/3)] min-w-[calc(100%/1)] h-[400px] bg-cover bg-center flex-shrink-0 group"
                style={{ backgroundImage: `url(${movie.image})`, scrollSnapAlign: "start" }}
              >
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 text-lg font-semibold transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
                  {movie.title}
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
        </div>
    );
}
