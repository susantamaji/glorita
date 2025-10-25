import React, { useState } from "react";
import { FaArrowRight, FaHeartbeat, FaSmile, FaTimes, FaUserMd } from "react-icons/fa";
import Footer from "./Footer";
import bodyBanner from "../assets/photos/Home/body.jpg"; // <-- replace with your banner image

// Example service images (replace these with your real image paths)
import img1 from "../assets/photos/Home/body.jpg";
import img2 from "../assets/photos/Home/hair.jpg";
import img3 from "../assets/photos/Home/slide2.webp";
import img4 from "../assets/photos/Home/hair.jpg";
import img5 from "../assets/photos/Home/body.jpg";
import img6 from "../assets/photos/Home/hair.jpg";
import img7 from "../assets/photos/Home/hair.jpg";
import img8 from "../assets/photos/Home/body.jpg";
import img9 from "../assets/photos/Home/hair.jpg";

const services = [
  {
    title: "Liposuction",
    icon: <FaUserMd className="text-blue-500 text-3xl" />,
    desc: "Liposuction is a precision fat-removal procedure designed to sculpt and contour your body. It targets stubborn fat deposits in areas like the abdomen, thighs, hips, and arms that don’t respond to diet or exercise. Using advanced techniques such as tumescent or laser-assisted liposuction, we help achieve a smoother and more defined silhouette while maintaining natural proportions.",
    image: img1,
  },
  {
    title: "Abdominoplasty (Tummy Tuck)",
    icon: <FaHeartbeat className="text-blue-500 text-3xl" />,
    desc: "Abdominoplasty tightens weakened abdominal muscles and removes excess skin and fat for a firmer, flatter stomach. Ideal after pregnancy or significant weight loss, the tummy tuck restores core strength and a toned midsection, providing both functional and aesthetic benefits that rejuvenate your confidence and posture.",
    image: img2,
  },
  {
    title: "Arm Lift (Brachioplasty)",
    icon: <FaSmile className="text-blue-500 text-3xl" />,
    desc: "An arm lift eliminates sagging skin and fat from the upper arms, commonly known as ‘bat wings.’ By reshaping and firming the arms, brachioplasty helps restore smooth, youthful contours. The procedure is perfect for individuals who’ve experienced significant weight fluctuations or age-related skin laxity.",
    image: img3,
  },
  {
    title: "Buttock Lift or Buttock Augmentation",
    icon: <FaArrowRight className="text-blue-500 text-3xl" />,
    desc: "This procedure enhances the shape, projection, and firmness of the buttocks. Depending on your goals, it may involve fat grafting (Brazilian Butt Lift) or implants to achieve the desired contour. The result is a naturally lifted, sculpted silhouette that enhances your body’s overall harmony and balance.",
    image: img4,
  },
  {
    title: "Thigh Lift",
    icon: <FaUserMd className="text-blue-500 text-3xl" />,
    desc: "A thigh lift removes excess skin and fat from the inner and outer thighs to improve tone and proportion. It smoothens skin irregularities caused by weight loss or aging, delivering a firmer and more youthful lower body appearance that complements your natural curves.",
    image: img5,
  },
  {
    title: "Body Lift",
    icon: <FaHeartbeat className="text-blue-500 text-3xl" />,
    desc: "A comprehensive body lift targets multiple areas — including the abdomen, thighs, and buttocks — to restore contour and firmness after major weight loss. It tightens sagging tissues, improves skin tone, and redefines your body’s overall appearance with remarkable, long-lasting results.",
    image: img6,
  },
  {
    title: "Dermabrasion",
    icon: <FaSmile className="text-blue-500 text-3xl" />,
    desc: "Dermabrasion is a specialized exfoliating treatment that removes damaged outer layers of skin to reveal smoother, healthier skin underneath. It’s effective for reducing scars, fine lines, and uneven texture. The treatment stimulates natural collagen production, leaving your skin refreshed and radiant.",
    image: img7,
  },
  {
    title: "Chemical Peel",
    icon: <FaArrowRight className="text-blue-500 text-3xl" />,
    desc: "A chemical peel rejuvenates the skin by removing dull, damaged layers using safe chemical solutions. It treats acne scars, pigmentation, wrinkles, and sun damage. With varying peel strengths available, it offers smoother texture, improved clarity, and a visibly youthful glow.",
    image: img8,
  },
];

const BodyCountry = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bodyBanner})` }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
            Body Contouring & Skin
          </h1>
          <div className="text-lg text-gray-200 font-semibold mt-4 md:mt-0">
            Home <span className="text-blue-400">›</span> Body Contouring & Skin
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sculpt, Smooth & Shine with Confidence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our body contouring and skin rejuvenation treatments combine advanced medical techniques with artistic precision to help you achieve your ideal physique.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-6 border border-transparent hover:border-blue-400"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full transition">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.desc.slice(0, 100)}...
              </p>
              <p className="text-blue-600 mt-2 text-center font-semibold">
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
            <p className="text-gray-600 leading-relaxed">
              {selectedService.desc}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BodyCountry;
