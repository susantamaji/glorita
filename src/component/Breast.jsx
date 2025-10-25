import React, { useState } from "react";
import { FaHeartbeat, FaUserMd, FaSmile, FaFeatherAlt, FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import img1 from "../assets/photos/Home/body.jpg";
import img2 from "../assets/photos/Home/hair.jpg";
import img3 from "../assets/photos/Home/slide2.webp";
import img4 from "../assets/photos/Home/hair.jpg";

const treatments = [
  {
    title: "Breast Augmentation",
    icon: <FaSmile className="text-pink-500 text-3xl" />,
    desc: "Breast augmentation enhances the size and shape of the breasts using silicone or saline implants, or through fat transfer. This procedure is ideal for women seeking fuller, more symmetrical breasts or restoring lost volume after pregnancy or weight loss. The results are natural-looking, balanced, and tailored to complement your body shape.",
    fullDesc:
      "Breast augmentation is a safe and effective procedure designed to enhance your figure and self-confidence. Our surgeons use state-of-the-art techniques and FDA-approved implants. Recovery typically takes 1–2 weeks, with results that can last for years. Every treatment is customized to ensure your comfort and satisfaction.",
    image: img1,
  },
  {
    title: "Breast Lift (Mastopexy)",
    icon: <FaFeatherAlt className="text-pink-500 text-3xl" />,
    desc: "A breast lift reshapes and elevates sagging breasts to a more youthful and perky position without changing their size significantly.",
    fullDesc:
      "A breast lift, or mastopexy, rejuvenates the breasts by removing excess skin and tightening the surrounding tissue. It restores a youthful contour and can be combined with augmentation or reduction for optimal shape. The procedure typically takes 2–3 hours with visible improvements immediately.",
    image: img2,
  },
  {
    title: "Breast Reduction",
    icon: <FaHeartbeat className="text-pink-500 text-3xl" />,
    desc: "Breast reduction surgery removes excess tissue, fat, and skin to achieve a lighter, firmer, and more proportionate bust.",
    fullDesc:
      "Breast reduction offers both aesthetic and medical benefits, alleviating neck, back, and shoulder pain. Our surgeons focus on achieving symmetry, comfort, and natural beauty. You’ll experience improved posture, confidence, and clothing fit after recovery.",
    image: img3,
  },
  {
    title: "Breast Implant Removal",
    icon: <FaUserMd className="text-pink-500 text-3xl" />,
    desc: "Breast implant removal (explant surgery) is performed when patients wish to remove or replace existing implants.",
    fullDesc:
      "Whether for personal preference or health reasons, implant removal is a delicate process that focuses on preserving the natural breast contour. Our team may recommend a lift for optimal shape. The results emphasize comfort, balance, and natural beauty.",
    image: img4,
  },
];

const Breats = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center bg-[url('https://northsunflower.com/wp-content/uploads/2015/02/surgery1.jpg')]">
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
            Breasts
          </h1>
          <div className="text-lg text-gray-200 font-semibold mt-4 md:mt-0">
            Home <span className="text-pink-400">›</span> Breasts
          </div>
        </div>
      </div>

      {/* Treatments Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-pink-100 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Enhance, Restore & Rebalance with Confidence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our breast procedures are designed to celebrate your natural beauty while aligning with your unique goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              onClick={() => setSelected(treatment)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition duration-300 transform hover:-translate-y-2 p-6 border border-transparent hover:border-pink-400"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-pink-100 rounded-full transition">
                  {treatment.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-pink-600 transition">
                {treatment.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {treatment.desc}
              </p>
              <p className="text-pink-500 font-semibold text-sm mt-3 text-center">
                Click to read more →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Full Details */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition"
            >
              <FaTimes />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selected.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{selected.fullDesc}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Breats;
