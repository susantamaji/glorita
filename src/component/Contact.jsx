import React from 'react'
import bannerImg from '../assets/photos/appoitment.jpg';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { useState } from "react";
import { Mail, Phone, User, MapPin, CalendarDays, MessageSquare } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateFrom: "",
    dateTo: "",
    message: "",
  });
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
          <h1 className="text-white text-3xl md:text-4xl font-bold mt-8 md:mt-32">
            About
          </h1>

          {/* Right: Breadcrumb */}
          <div className="text-2xl font-bold mb-15 md:mt-42">
            <NavLink to={"/"}><span className="hover:underline cursor-pointer text-[#f2ffff]">Home</span> </NavLink>
            <span className="mx-2 text-white">{'/'}</span>
            <NavLink to={"/about"}><span className="text-white">About</span></NavLink>
          </div>
        </div>
      </div>


      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50">
        {/* Left Section - Form */}
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full md:w-1/2 max-w-2xl m-5">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">MAKE AN APPOINTMENT</h2>
          <p className="text-center text-gray-500 mb-8">Please fill in the form below to book your appointment</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <User className="text-green-500 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <Mail className="text-green-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <Phone className="text-green-500 mr-2" />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <MapPin className="text-green-500 mr-2" />
              <input
                type="text"
                placeholder="Address"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Date From */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <CalendarDays className="text-green-500 mr-2" />
              <input
                type="date"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Date To */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <CalendarDays className="text-green-500 mr-2" />
              <input
                type="date"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex items-start border border-gray-300 rounded-lg px-3 py-2 hover:border-green-400 transition">
              <MessageSquare className="text-green-500 mr-2 mt-1" />
              <textarea
                placeholder="Your Message"
                className="w-full focus:outline-none resize-none"
                rows="3"
              ></textarea>
            </div>

            {/* Time Options */}
            <div className="md:col-span-2 grid grid-cols-3 gap-3">
              {["Morning", "Lunch", "Evening"].map((time, index) => (
                <button
                  key={index}
                  type="button"
                  className="border border-gray-300 py-2 rounded-lg hover:bg-green-100 hover:border-green-400 transition text-gray-700 font-medium"
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600 transition font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex w-1/2 justify-center">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.mXCHDfk2QeKuF0WhGdOLCAHaEc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Doctor"
            className="w-[80%] object-contain"
          />
        </div>
      </div>

      <iframe className='w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.2519343937092!2d88.43471912493732!3d22.576489029488936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a89d5be09f%3A0x973017199d44a976!2sCP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700091!5e1!3m2!1sen!2sin!4v1760804342010!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </div>
  )
}

export default Contact