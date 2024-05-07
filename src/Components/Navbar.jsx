import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black w-full absolute z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Site Title */}
        <Link to="home" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Roshani Borkar
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-white hover:bg-black focus:ring-white"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:p-0 md:hover:text-indigo-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent:border-gray-700 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:p-0 md:hover:text-indigo-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent:border-gray-700 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:p-0 md:hover:text-indigo-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent:border-gray-700 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => toggleMenu(false)}
                className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:p-0 md:hover:text-indigo-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent:border-gray-700 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
