import React, { useState } from "react";
import { FaArrowRight, FaHeartbeat, FaSmile, FaTimes, FaUserMd } from "react-icons/fa";
import Footer from "./Footer";
import face from "../assets/photos/Home/face.jpg";

// Example images for each service (replace with your real ones)
import img1 from "../assets/photos/Home/body.jpg";
import img2 from "../assets/photos/Home/hair.jpg";
import img3 from "../assets/photos/Home/slide2.webp";
import img4 from "../assets/photos/Home/hair.jpg";
import img5 from "../assets/photos/Home/body.jpg";
import img6 from "../assets/photos/Home/hair.jpg";
import img7 from "../assets/photos/Home/hair.jpg";
import img8 from "../assets/photos/Home/body.jpg";
import img9 from "../assets/photos/Home/hair.jpg";
import { RxCross2} from "react-icons/rx";

const services = [
  {
    title: "Rhinoplasty (Nose Surgery)",
    icon: <FaUserMd className="text-yellow-500 text-3xl" />,
    desc: "Rhinoplasty enhances the shape, size, and overall symmetry of your nose...",
    image: img1,
  },
  {
    title: "Facelift (Rhytidectomy)",
    icon: <FaSmile className="text-yellow-500 text-3xl" />,
    desc: "A facelift helps restore youthful contours by tightening sagging skin...",
    image: img2,
  },
  {
    title: "Brow Lift",
    icon: <FaArrowRight className="text-yellow-500 text-3xl" />,
    desc: "The brow lift elevates drooping eyebrows and smoothens forehead lines...",
    image: img3,
  },
  {
    title: "Eyelid Surgery (Blepharoplasty)",
    icon: <FaHeartbeat className="text-yellow-500 text-3xl" />,
    desc: "Blepharoplasty removes excess skin, fat, and puffiness around the eyes...",
    image: img4,
  },
  {
    title: "Neck Lift",
    icon: <FaUserMd className="text-yellow-500 text-3xl" />,
    desc: "A neck lift refines jawline definition and smoothens loose or sagging skin...",
    image: img5,
  },
  {
    title: "Cheek Lift or Chin Surgery",
    icon: <FaSmile className="text-yellow-500 text-3xl" />,
    desc: "Enhance your facial harmony with cheek or chin contouring...",
    image: img6,
  },
  {
    title: "Otoplasty (Ear Reshaping)",
    icon: <FaArrowRight className="text-yellow-500 text-3xl" />,
    desc: "Otoplasty reshapes, reduces, or repositions the ears...",
    image: img7,
  },
  {
    title: "Dimple Creation",
    icon: <FaSmile className="text-yellow-500 text-3xl" />,
    desc: "A quick and safe cosmetic procedure to create natural dimples...",
    image: img8,
  },
  {
    title: "Lip Augmentation",
    icon: <FaHeartbeat className="text-yellow-500 text-3xl" />,
    desc: "Lip augmentation adds volume, shape, and definition to the lips...",
    image: img9,
  },
];

const Face = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${face})` }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
            Face & Neck Procedures
          </h1>
          <div className="text-lg text-gray-200 font-semibold mt-4 md:mt-0">
            Home <span className="text-yellow-400">›</span> Face & Neck
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Reimagine Your Beauty with Precision & Care
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Face and Neck treatments combine advanced techniques with artistic expertise...
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-6 border border-transparent hover:border-yellow-400"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-yellow-100 rounded-full  transition">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-yellow-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.desc.slice(0, 100)}...
              </p>
              <p className="text-yellow-600 mt-2 text-center font-semibold">
                Read More →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Details */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-gray-400 bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition"
              onClick={() => setSelectedService(null)}
            >
               <FaTimes />
            </button>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedService.title}
            </h2>
            <p className="text-gray-600">{selectedService.desc}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Face;
