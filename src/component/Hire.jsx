import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
// Import your images
import faceImg from "../assets/photos/Home/face.jpg";
import bodyImg from "../assets/photos/Home/body.jpg";
import breastImg from "../assets/photos/Home/breasts.jpeg";
import Footer from "./Footer";
import face from "../assets/photos/Home/face.jpg";

const Hire = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Face & Neck",
      image: faceImg,
      short: "Enhance your facial features and rejuvenate your skin naturally.",
      long: "Our face and neck treatments include facelift, neck lift, wrinkle reduction, and advanced skincare techniques designed to restore youth and radiance. We offer personalized care for every skin type using the latest aesthetic technology, helping you look refreshed and naturally confident.",
    },
    {
      id: 2,
      title: "Body Contouring & Skin",
      image: bodyImg,
      short: "Shape your body and revitalize your skin with our expert care.",
      long: "We offer modern body contouring, liposuction, skin tightening, and cellulite reduction services tailored to your body goals. Each treatment is designed to enhance your natural contours and improve skin tone, giving you a firm, youthful, and sculpted appearance.",
    },
    {
      id: 3,
      title: "Breasts",
      image: breastImg,
      short: "Achieve the ideal balance, shape, and confidence you deserve.",
      long: "From breast augmentation to lift and reconstruction, our personalized approach enhances your natural beauty while ensuring safety and satisfaction. Our experts provide complete guidance throughout the process to help you feel comfortable and confident in your transformation journey.",
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${face})` }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
           Hire
          </h1>
          <div className="text-lg text-gray-200 font-semibold mt-4 md:mt-0">
            Home <span className="text-yellow-400">›</span> Face & Neck
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-20 mt-6 px-6 ">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our specialized treatments for a more confident you.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(card)} // open modal
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.short}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(card);
                  }}
                  className="text-emerald-500 font-medium hover:text-emerald-700 transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Details */}
        {activeCard && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden animate-fadeIn">
              {/* Close button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 bg-emerald-500 text-white rounded-full p-2 hover:bg-emerald-600 transition"
              >
                <FaTimes />
              </button>

              {/* Modal content */}
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {activeCard.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{activeCard.long}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Hire;
