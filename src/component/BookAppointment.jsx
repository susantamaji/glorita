import React from 'react'
import bannerImg from '../assets/photos/appoitment.jpg';
import { NavLink } from 'react-router-dom';

import { Calendar, Mail, Phone, User, Sparkles } from "lucide-react";
import Footer from './Footer';



function BookAppointment() {
  const services = [
    { name: "Face & Neck", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Body Contouring & Skin", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Breasts", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Hair", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    // { name: "Others", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
  ];
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
          <h1 className="text-cyan-400 text-3xl md:text-4xl font-bold mt-8 md:mt-0">
            About
          </h1>

          {/* Right: Breadcrumb */}
          <div className="text-2xl font-bold mt-4 md:mt-0">
            <NavLink to={"/"}><span className="hover:underline cursor-pointer text-[#ffffff]">Home</span> </NavLink>
            <span className="mx-2 text-white">{'>'}</span>
            <NavLink to={"/about"}><span className="text-gray-300">About</span></NavLink>
          </div>
        </div>
      </div>


      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl p-10 max-w-6xl w-full">
          {/* Left Section - Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-8">
              Enhance your beauty with our expert care. Book your visit at <span className="font-semibold">The Royal Aesthetic Clinic</span> today.
            </p>

            <form className="space-y-5">
              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-400 transition">
                <User className="text-yellow-500 mr-2" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-400 transition">
                <Mail className="text-yellow-500 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full focus:outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-400 transition">
                <Phone className="text-yellow-500 mr-2" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full focus:outline-none"
                />
              </div>

              <div className="border rounded-xl px-3 py-2 hover:border-yellow-400 transition">
                <select className="w-full focus:outline-none bg-transparent">
                  <option>Select Service</option>
                  {services.map((s, index) => (
                    <option key={index}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-400 transition">
                <Calendar className="text-yellow-500 mr-2" />
                <input
                  type="date"
                  className="w-full focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition shadow-md font-semibold"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Right Section - Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-sm uppercase text-yellow-600 font-semibold mb-2">Ready to Begin?</h3>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Make an Appointment at <br /> The Royal Aesthetic Clinic
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We tailor every experience to your unique beauty goals. From rejuvenating treatments to expert consultations,
                our skilled specialists ensure care, confidence, and results every step of the way.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Opening Hours</h4>
              <p className="text-gray-600">Monday - Sunday</p>
              <p className="text-gray-800 font-medium">9 AM - 5 PM</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {services.map((s, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 p-3 rounded-xl border hover:bg-yellow-50 hover:shadow transition"
                >
                  {s.icon}
                  <span className="font-medium text-gray-700">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BookAppointment