import React, { useState } from "react";
import face from "../assets/photos/logo.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Close menu when clicking a NavLink
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="text-black flex justify-between items-center px-4 sm:px-6 py-2 text-sm bg-gray-50">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-teal-600" />
          <span className="text-gray-700">House No. 17A, Street 31, Islamabad</span>
        </div>
        <div className="flex gap-3 text-lg text-gray-600">
          <a href="#" className="hover:text-teal-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-teal-600 transition">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#4fa2a1] text-white px-4 sm:px-10 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <NavLink to="/" onClick={handleNavClick} className="flex items-center gap-2">
          <img
            src={face}
            alt="Logo"
            className="h-14 w-14 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-white shadow"
          />
          <span className="font-semibold text-lg sm:text-xl">Royal Aesthetics</span>
        </NavLink>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none hover:text-yellow-300 transition"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#4fa2a1] md:bg-transparent flex flex-col md:flex-row md:items-center text-base md:gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          }`}
        >
          <NavLink to="/" onClick={handleNavClick}>
            <li className="px-4 py-3 hover:text-yellow-300 text-center md:text-left cursor-pointer transition">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" onClick={handleNavClick}>
            <li className="px-4 py-3 hover:text-yellow-300 text-center md:text-left cursor-pointer transition">
              About
            </li>
          </NavLink>

          {/* Services Dropdown */}
          <li
            className="relative group px-4 py-3 text-center md:text-left cursor-pointer select-none z-50"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            <div className="flex items-center justify-center md:justify-start gap-1 hover:text-yellow-300 transition">
              Services <FaChevronDown size={12} />
            </div>

            {/* Dropdown Menu */}
            <ul
              className={`${
                serviceOpen ? "block" : "hidden md:group-hover:block"
              } md:absolute md:left-0 md:top-10 bg-[#ffffff] md:rounded-md shadow-lg text-gray-800 md:w-56`}
            >
              {[
                "Face & Neck",
                "Body Contouring & Skin",
                "Breasts",
                "Hair",
              ].map((item) => (
                <NavLink key={item} to="#" onClick={handleNavClick}>
                  <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black transition text-sm md:text-base">
                    {item}
                  </li>
                </NavLink>
              ))}
            </ul>
          </li>

          <NavLink to="/bookanappoitment" onClick={handleNavClick}>
            <li className="px-4 py-3 hover:text-yellow-300 text-center md:text-left cursor-pointer transition">
              Book An Appointment
            </li>
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
            <li className="px-4 py-3 hover:text-yellow-300 text-center md:text-left cursor-pointer transition">
              Contact
            </li>
          </NavLink>

          {/* Appointment Button */}
          <NavLink to="/contact" onClick={handleNavClick}>
            <li className="px-4 py-4 md:py-0 flex justify-center">
              <button className="bg-gradient-to-r from-indigo-800 to-cyan-400 px-6 py-2 rounded-full hover:opacity-90 transition font-semibold">
                Make Appointment
              </button>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
