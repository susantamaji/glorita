import React from 'react';
import bannerImg from '../assets/photos/Home/face.jpg';
import { NavLink } from 'react-router-dom';
import { Calendar, Mail, Phone, User, Sparkles } from "lucide-react";
import Footer from './Footer';

function BookAppointment() {
  const services = [
    { name: "Face & Neck", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Body Contouring & Skin", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Breasts", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
    { name: "Hair", icon: <Sparkles className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Banner Section */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0  bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-cyan-300 text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
            Book Appointment
          </h1>
          <div className="text-xl font-semibold mt-4 md:mt-0 text-white">
            <NavLink to={"/"}>
              <span className="hover:underline cursor-pointer">Home</span>
            </NavLink>
            <span className="mx-2">{'>'}</span>
            <span className="text-yellow-300">Book Appointment</span>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl p-10 max-w-6xl w-full">
          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-8">
              Choose your preferred service and book a session with our experts. We’ll help you look and feel your best.
            </p>

            <form className="space-y-5">
              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-500 hover:shadow-md transition">
                <User className="text-yellow-500 mr-2" />
                <input type="text" placeholder="Name" className="w-full focus:outline-none" />
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-500 hover:shadow-md transition">
                <Mail className="text-yellow-500 mr-2" />
                <input type="email" placeholder="Email" className="w-full focus:outline-none" />
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-500 hover:shadow-md transition">
                <Phone className="text-yellow-500 mr-2" />
                <input type="tel" placeholder="Phone Number" className="w-full focus:outline-none" />
              </div>

              <div className="border rounded-xl px-3 py-2 hover:border-yellow-500 hover:shadow-md transition">
                <select className="w-full focus:outline-none bg-transparent text-gray-700">
                  <option>Select Service</option>
                  {services.map((s, index) => (
                    <option key={index}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center border rounded-xl px-3 py-2 hover:border-yellow-500 hover:shadow-md transition">
                <Calendar className="text-yellow-500 mr-2" />
                <input type="date" className="w-full focus:outline-none" />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 hover:shadow-lg transition font-semibold"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Right: Info Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-sm uppercase text-yellow-600 font-semibold mb-2">Your Beauty, Our Expertise</h3>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Explore Our Signature Treatments
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Discover tailored solutions for your face, body, breasts, and hair. Every treatment is designed to bring
                confidence, radiance, and rejuvenation to your natural beauty.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Opening Hours</h4>
              <p className="text-gray-600">Monday - Sunday</p>
              <p className="text-gray-800 font-medium">9 AM - 5 PM</p>
            </div>

            {/* Services List with Hover Effects */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2 p-4 rounded-xl border border-yellow-200 bg-white hover:bg-yellow-50 hover:scale-105 hover:shadow-lg transition transform duration-300 cursor-pointer"
                >
                  {s.icon}
                  <span className="font-medium text-gray-800 hover:text-yellow-600 transition">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookAppointment;
