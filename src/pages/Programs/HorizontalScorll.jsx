import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const universityPrograms = [
  { 
    title: "BSc in Computer Science", 
    description: "A four-year program covering algorithms, AI, software engineering, and full-stack development.", 
    image: "https://wallpapercave.com/wp/wp4991568.jpg"
  },
  { 
    title: "BBA in Business Administration", 
    description: "Develop leadership, management, and financial skills with hands-on case studies.", 
    image: "https://wallpapercave.com/wp/wp4991569.jpg"
  },
  { 
    title: "BEng in Civil Engineering", 
    description: "Learn structural design, geotechnical engineering, and sustainable construction practices.", 
    image: "https://wallpapercave.com/wp/wp4327154.jpg"
  },
  { 
    title: "MBBS in Medicine", 
    description: "A six-year intensive medical program focusing on anatomy, pathology, and clinical practice.", 
    image: "https://wallpapercave.com/wp/wp4991580.jpg"
  },
  { 
    title: "BSc in Data Science", 
    description: "Explore big data, machine learning, and statistical analysis for decision-making.", 
    image: "https://wallpapercave.com/wp/wp4991602.jpg"
  },
  { 
    title: "BSc in Artificial Intelligence", 
    description: "Dive deep into AI, neural networks, deep learning, and automation technologies.", 
    image: "https://wallpapercave.com/wp/wp4991580.jpg"
  },
  { 
    title: "LLB in Law", 
    description: "Gain expertise in legal studies, international law, and constitutional policies.", 
    image: "https://wallpapercave.com/wp/wp4991602.jpg"
  },
  { 
    title: "BA in Psychology", 
    description: "Understand human behavior, cognitive processes, and mental health research.", 
    image: "https://wallpapercave.com/wp/wp4991569.jpg"
  }
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
      const scrollAmount = direction === "left" ? -clientWidth / 3 : clientWidth / 3;
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

      {/* Scrollable University Programs Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar px-6"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...universityPrograms, ...universityPrograms].map((program, index) => (
          <div
            key={index}
            className="relative xl:min-w-[calc(100%/4)] md:min-w-[calc(100%/3)] min-w-[calc(100%/1)] aspect-[2/3] bg-cover bg-center flex-shrink-0 group rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${program.image})`, scrollSnapAlign: "start" }}
          >
            {/* Always Visible Overlay with Program Details */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-4 px-2">
              <h3 className="text-lg font-bold">{program.title}</h3>
              <p className="text-sm opacity-80">{program.description}</p>
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
