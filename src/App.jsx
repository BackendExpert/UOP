import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SecNav from "./components/Nav/SecNav";
import MainNav from "./components/Nav/MainNav";
import { useEffect, useState } from "react";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");

  return (
      <BrowserRouter>
        <div className="">
          <MainNav />
        </div>
        {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "md:mt-28 mt-[70px]"
              : "shadow-md transition-colors duration-500"
          }`}
          >
            <SecNav />
          </div>
        )}
        {/* <div className={`${isTopOfPage ? 'block' : 'hidden' }`}>
          <SecNav />
        </div> */}
        <Routes>
          <Route path="/" element={<HomePage /> } />
        </Routes>
      </BrowserRouter>
  )
}