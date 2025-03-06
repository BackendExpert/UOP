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
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...movies, ...movies].map((movie, index) => (
              <div
                key={index}
                className="xl:min-w-[calc(100%/4)] md:min-w-[calc(100%/3)] min-w-[calc(100%/1)] h-[400px] bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${movie.image})`, scrollSnapAlign: "start" }}
              ></div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      );
}
