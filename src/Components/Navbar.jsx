import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between h-20 px-8 bg-[#4F46E5] text-white">
      <img src={logo} alt="Logo" className="h-12" />
      <nav
        className={`absolute top-0 left-0 w-full h-screen flex flex-col items-start p-8 pt-20 bg-white text-black transition-transform duration-500 md:static md:flex-row md:h-auto md:w-auto md:bg-[#4F46E5] md:text-white md:items-center md:gap-6 md:p-0 md:pt-0 md:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <a href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">HOME</a>
        <a href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">SERVICES</a>
        <a href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">ABOUT US</a>
        <a href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">CONTACT US</a>
        <a href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">CAREERS</a>
        <button
          className="absolute top-8 right-8 text-black text-3xl md:hidden"
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="text-white text-3xl md:hidden"
        onClick={toggleNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
