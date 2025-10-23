// About.jsx
import React from 'react';
import bannerImg from '../assets/photos/aboutface.jpg';
import { FaStethoscope, FaHandHoldingUsd, FaUserMd } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  return (
    <div>

      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          {/* Left: Title */}
          <h1 className="text-white text-3xl md:text-4xl font-bold mt-8 md:mt-0">
            About
          </h1>

          {/* Right: Breadcrumb */}
          <div className="text-2xl font-bold mt-4 md:mt-0">
            <NavLink to={"/"}><span className="hover:underline cursor-pointer text-[#094f4f]">Home</span> </NavLink>
            <span className="mx-2">{'>'}</span>
            <NavLink to={"/about"}><span className="text-gray-300">About</span></NavLink>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-yellow-500 font-semibold mb-2">
              About The Royal Skin Aesthetics Clinic
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Transforming Skincare with<br />
              Advanced Aesthetic Solutions Since 2006
            </h2>
            <p className="text-gray-700 mb-6">
              At The Royal Skin Aesthetics Clinic, located in F7, Islamabad, we offer cutting-edge <span className="text-yellow-600 font-semibold underline cursor-pointer hover:text-yellow-700">skincare treatments</span> designed to enhance your natural beauty and restore confidence in your skin. Our mission is to provide personalized care that makes every patient feel their best.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-105">
                  <FaStethoscope className="text-yellow-500 text-2xl group-hover:text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-yellow-600 font-semibold text-lg">
                    Modern Technology
                  </h4>
                  <p className="text-gray-600">
                    We utilize state-of-the-art technology to deliver effective and minimally invasive treatments, ensuring the best results.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-yellow-500 p-3 rounded-md transition-transform transform group-hover:scale-105">
                  <FaHandHoldingUsd className="text-white text-2xl group-hover:text-gray-100" />
                </div>
                <div>
                  <h4 className="text-yellow-600 font-semibold text-lg">
                    Affordable Pricing
                  </h4>
                  <p className="text-gray-600">
                    Accessible skincare solutions at competitive prices, without compromising on quality.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-white shadow-lg p-3 rounded-md transition-transform transform group-hover:scale-105">
                  <FaUserMd className="text-yellow-500 text-2xl group-hover:text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-yellow-600 font-semibold text-lg">
                    Certified Doctor
                  </h4>
                  <p className="text-gray-600">
                    Certified skincare professionals providing expert guidance and personalized treatment plans.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <a
              href="#"
              className="inline-block border-2 border-yellow-500 text-yellow-600 font-semibold px-5 py-2 rounded hover:bg-yellow-500 hover:text-white transition-colors"
            >
              More About Us
            </a>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="https://www.georgiaderm.com/wp-content/uploads/2022/06/iStock-1364062170-1.jpg"
              alt="Facial treatment"
              className="rounded-lg object-cover w-full h-full row-span-1"
            />
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.ylvrLfK39Vmkx3t7KmR7-gHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Doctor treatment"
              className="rounded-lg object-cover w-full h-full row-span-1"
            />
            <img
              src="https://otcoclinic.com/wp-content/uploads/2024/08/aestheticdermatologywhatareitsbenefits.jpg"
              alt="Injection treatment"
              className="rounded-lg object-cover w-full h-full col-span-2"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
