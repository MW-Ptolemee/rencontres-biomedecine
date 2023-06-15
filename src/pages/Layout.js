import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Overlay from "../components/Overlay";
import MobileMenu from "../components/MobileMenu";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ toggleMode, darkMode, handleText }) => {
  const [isOpen, setIsopen] = useState(false);

  const handleMenu = () => {
    setIsopen(!isOpen);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <div className="relative">
      <MobileMenu darkMode={darkMode} handleMenu={handleMenu} isOpen={isOpen} />
      <Overlay handleMenu={handleMenu} isOpen={isOpen} />
      <Header darkMode={darkMode} />
      <Navbar
        handleMenu={handleMenu}
        toggleMode={toggleMode}
        darkMode={darkMode}
        handleText={handleText}
      />
      <Outlet darkMode={darkMode} />
      <ScrollToTop handleScroll={handleScroll} />
      <Footer />
    </div>
  );
};

export default Layout;
