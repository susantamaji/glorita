import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import img from "../assets/photos/logo.jpg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverColor, setHoverColor] = useState(false);
  const location = useLocation();

  // Reusable underline animation
  const underlineClass = (isActive) =>
    `relative px-1 transition-colors duration-300 ${isActive ? "text-white font-bold" : "text-gray-200"
    } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-emerald-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 text-white left-0 w-full flex items-center z-50 justify-between px-6 py-4 shadow-md bg-blue-500 backdrop-blur-md bg-opacity-95">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-4">
        
          <img src={img} alt="" className="h-16 rounded-full" />
          <span className="text-white">Glorita</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-white">
          <NavLink to="/" className={({ isActive }) => underlineClass(isActive)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => underlineClass(isActive)}>About Me</NavLink>
        
          {/* Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setHoverColor(true)}
            onMouseLeave={() => setHoverColor(false)}
          >
            <div className="flex items-center gap-1">
              Pages <ChevronDown size={16} />
            </div>
            {hoverColor && (
              <div className="absolute top-6 left-0 z-50 bg-slate-800 shadow-lg rounded-md w-44 py-2">
                <NavLink to="/face" className={({ isActive }) => `block px-4 py-2 hover:bg-slate-700 rounded ${underlineClass(isActive)}`}>Face & Neck</NavLink>
                <NavLink to="/bodycountry" className={({ isActive }) => `block px-4 py-2 hover:bg-slate-700 rounded ${underlineClass(isActive)}`}>Body Country & Skin</NavLink>
                <NavLink to="/breast" className={({ isActive }) => `block px-4 py-2 hover:bg-slate-700 rounded ${underlineClass(isActive)}`}>Breast</NavLink>
                <NavLink to="/hire" className={({ isActive }) => `block px-4 py-2 hover:bg-slate-700 rounded ${underlineClass(isActive)}`}>Hire</NavLink>
              </div>
            )}
          </li>

          <NavLink to="/blog" className={({ isActive }) => underlineClass(isActive)}>Blog</NavLink>
          <NavLink to="/contact" className={({ isActive }) => underlineClass(isActive)}>Contact</NavLink>
          <NavLink to="/bookanappoitment" className={({ isActive }) => underlineClass(isActive)}>Book & Appoitment</NavLink>
          
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-[24px]">
          <a href="https://www.facebook.com/profile.php?id=61556966303789" className="hover:text-blue-500 transition-transform transform hover:scale-125">
            <FaFacebook />
          </a>
          <a href="https://x.com/GemstoneExpert" className="hover:text-gray-400 transition-transform transform hover:scale-125">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.youtube.com/@gemstone_expert" className="hover:text-red-500 transition-transform transform hover:scale-125">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/gemstone_expert_sujoy_das/" className="hover:text-pink-500 transition-transform transform hover:scale-125">
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 transition-transform duration-300"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<div
  className={`md:hidden fixed top-16 left-0 h-full w-64 bg-slate-900 text-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <ul className="p-6 space-y-4 flex flex-col font-bold mt-4">
    <NavLink
      to="/"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => underlineClass(isActive)}
    >
      <li>Home</li>
    </NavLink>

    <NavLink
      to="/about"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => underlineClass(isActive)}
    >
      <li>About Me</li>
    </NavLink>

    {/* Pages Dropdown in Mobile */}
    <li className="relative">
      <details className="group">
        <summary className="cursor-pointer flex items-center justify-between text-white py-2">
          <span>Pages</span>
          <ChevronDown
            size={18}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="pl-4 mt-2 space-y-2">
          <NavLink
            to="/face"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Face & Neck</li>
          </NavLink>
          <NavLink
            to="/bodycountry"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Body Country & Skin</li>
          </NavLink>
          <NavLink
            to="/breast"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Breast</li>
          </NavLink>
          <NavLink
            to="/hire"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => underlineClass(isActive)}
          >
            <li>Hire</li>
          </NavLink>
        </div>
      </details>
    </li>

    <NavLink
      to="/blog"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => underlineClass(isActive)}
    >
      <li>Blog</li>
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => underlineClass(isActive)}
    >
      <li>Contact</li>
    </NavLink>

    <NavLink
      to="/bookanappoitment"
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) => underlineClass(isActive)}
    >
      <li>Book & Appoitment</li>
    </NavLink>
  </ul>
</div>


      {/* Social Icons */}
      <div className="hidden md:flex items-center gap-4 text-[24px]">
        <a
          href="https://www.facebook.com/profile.php?id=61556966303789"
          className=" hover:text-blue-500 transition-transform transform hover:scale-125"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/GemstoneExpert"
          className="hover:text-gray-400 transition-transform transform hover:scale-125"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.youtube.com/@gemstone_expert"
          className="hover:text-red-500 transition-transform transform hover:scale-125"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/gemstone_expert_sujoy_das/"
          className="hover:text-pink-500 transition-transform transform hover:scale-125"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
