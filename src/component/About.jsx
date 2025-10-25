import React from 'react';
import bannerImg from '../assets/photos/aboutface.jpg';
import { FaSpa, FaHandHoldingHeart, FaHeartbeat, FaUserMd } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  return (
    <div>

      {/* Banner Section */}
      <div
        className="relative  w-full h-64 md:h-80 bg-cover bg-center mt-22 z-10"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-white text-3xl md:text-4xl font-bold mt-8 md:mt-0">
            About
          </h1>

          <div className="text-2xl font-bold mt-4 md:mt-0">
            <NavLink to={"/"}>
              <span className="hover:underline cursor-pointer text-[#e6b800]">Home</span>
            </NavLink>
            <span className="mx-2">{'>'}</span>
            <NavLink to={"/about"}>
              <span className="text-gray-300">About</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#e6b800] font-semibold mb-2">
              About Our Aesthetic Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Redefining Beauty with <br />
              <span className="text-[#e6b800]">Face, Body & Hair</span> Excellence
            </h2>
            <p className="text-gray-700 mb-6">
              At our clinic, we specialize in advanced aesthetic care for <span className="font-semibold text-[#e6b800]">Face & Neck, Body Contouring & Skin, Breasts,</span> and <span className="font-semibold text-[#e6b800]">Hair Restoration</span>.
              Our expert team uses cutting-edge technology to enhance your natural beauty with precision, care, and artistry.
            </p>

            {/* Features Section */}
            <div className="space-y-6 mb-8">
              {/* Face & Neck */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-110 group-hover:bg-[#e6b800]">
                  <FaSpa className="text-[#e6b800] text-2xl group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-[#e6b800] font-semibold text-lg group-hover:underline">
                    Face & Neck Rejuvenation
                  </h4>
                  <p className="text-gray-600">
                    Restore youthful radiance with our specialized skin tightening, lifting, and brightening treatments tailored for face and neck.
                  </p>
                </div>
              </div>

              {/* Body Contouring & Skin */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-110 group-hover:bg-[#e6b800]">
                  <FaHandHoldingHeart className="text-[#e6b800] text-2xl group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-[#e6b800] font-semibold text-lg group-hover:underline">
                    Body Contouring & Skin
                  </h4>
                  <p className="text-gray-600">
                    Achieve your dream body with non-surgical sculpting and smooth, glowing skin through our advanced skin therapies.
                  </p>
                </div>
              </div>

              {/* Breasts */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-110 group-hover:bg-[#e6b800]">
                  <FaHeartbeat className="text-[#e6b800] text-2xl group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-[#e6b800] font-semibold text-lg group-hover:underline">
                    Breast Aesthetic Solutions
                  </h4>
                  <p className="text-gray-600">
                    From enhancement to lift procedures, our treatments are designed to improve confidence and complement your natural silhouette.
                  </p>
                </div>
              </div>

              {/* Hair */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-110 group-hover:bg-[#e6b800]">
                  <FaUserMd className="text-[#e6b800] text-2xl group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-[#e6b800] font-semibold text-lg group-hover:underline">
                    Hair Restoration
                  </h4>
                  <p className="text-gray-600">
                    Using the latest hair transplant and PRP technologies, we help you regain healthy, natural, and confident hair growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
           <NavLink > <a
              href="#"
              className="inline-block border-2 border-[#e6b800] text-[#e6b800] font-semibold px-6 py-2 rounded-full hover:bg-[#e6b800] hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </a></NavLink>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="https://coastalaesthetic.com/wp-content/uploads/image_64873.jpg"
              alt="Face treatment"
              className="rounded-lg object-fit w-full h-full transform hover:scale-105 transition-all duration-500"
            />
            <img
              src="https://www.laserskinsurgery.com/wp-content/uploads/2022/07/lsscny-nyc-Shelton-Stomach-CoolSculpting_2.jpg"
              alt="Body contouring"
              className="rounded-lg object-fit w-full h-full transform hover:scale-105 transition-all duration-500"
            />
            <img
              src="https://westmodernclinic.com/wp-content/uploads/2023/04/fue-hair-transplant-before-and-after-scaled.jpg"
              alt="Hair restoration"
              className="rounded-lg object-cover w-full h-80 col-span-2 transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
