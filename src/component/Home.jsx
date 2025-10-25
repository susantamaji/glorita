import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img from "../assets/photos/Home/slid1.jpg";
import img2 from "../assets/photos/Home/slide2.webp";
import img3 from "../assets/photos/Home/slid3.webp";
import face from "../assets/photos/Home/face.jpg";
import body from "../assets/photos/Home/body.jpg";
import breasts from "../assets/photos/Home/breasts.jpeg";
import hair from "../assets/photos/Home/hair.jpg";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Enhance Your Natural Beauty",
    photo: img,
    description:
      "Discover expert skincare, rejuvenation, and contouring treatments designed to make you feel confident and radiant.",
  },
  {
    id: 2,
    title: "Advanced Aesthetic Solutions",
    photo: img2,
    description:
      "Using cutting-edge technology and professional expertise, we deliver natural, long-lasting results tailored for you.",
  },
  {
    id: 3,
    title: "Personalized Care You Deserve",
    photo: img3,
    description:
      "Our certified professionals ensure every patient receives safe, effective, and customized aesthetic care.",
  },
];

const services = [
  {
    id: 1,
    title: "Face & Neck",
    shortDesc: "Rejuvenate your facial contours and restore youthful radiance.",
    longDesc:
      "Our Face & Neck procedures combine modern aesthetic treatments such as skin tightening, PRP facials, fillers, and anti-aging solutions to enhance facial harmony, smooth wrinkles, and restore firm, glowing skin.",
    img: face,
  },
  {
    id: 2,
    title: "Body Contouring & Skin",
    shortDesc: "Sculpt and tone your body without surgery.",
    longDesc:
      "Our Body Contouring & Skin treatments use advanced non-invasive technology, including radiofrequency and ultrasound energy, to reduce stubborn fat, tighten loose skin, and redefine your natural silhouette safely and effectively.",
    img: body,
  },
  {
    id: 3,
    title: "Breasts",
    shortDesc: "Achieve balance, confidence, and natural enhancement.",
    longDesc:
      "We offer personalized breast aesthetic procedures including augmentation, lifting, and reshaping to restore youthful contour and symmetry while maintaining natural beauty and proportion.",
    img: breasts,
  },
  {
    id: 4,
    title: "Hair",
    shortDesc: "Restore your hair with precision and care.",
    longDesc:
      "Our hair restoration treatments, including PRP therapy and FUE/FUT hair transplants, stimulate natural growth and rejuvenate your scalp for thicker, healthier hair — boosting your confidence from root to tip.",
    img: hair,
  },
];

const testimonials = [
  {
    id: 1,
    text: `Aoa Dr. Maimoona, hope you are fine. I wanted to update you about my PRP post-treatment that I had yesterday with you. I am feeling good Alhamdulillah so far, taking all the precautions advised by you and satisfied with your treatment. Thank you.`,
    reply: `Thank you for contacting The Royal Skin Aesthetics! Please let us know how we can help you.`,
    time: "9:01 pm",
  },
  {
    id: 2,
    text: `Assalam o alaikum! Client review time: I got 2 IVs for immunity boosters! I have noticed significant smoothness in my skin. The two-tone texture is improved. My lips feel hydrated, plumped, and pinkish.`,
    image: "/images/lips.jpg",
    time: "4:23 pm",
  },
];

const Home = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [current, setCurrent] = useState(0);

  const toggleReadMore = (id) => {
    console.log("hello");
    
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden mt-8">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-16 transition-all duration-700 ease-in-out
              ${index === current
                ? "opacity-100 translate-x-0 z-20"
                : "opacity-0 -translate-x-10 pointer-events-none z-10"}`}
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[#9c7b6b] mb-4">
                {slide.title}
              </h2>
              <p className="text-gray-600 mb-6">{slide.description}</p>
              <div className="flex justify-center md:justify-start gap-4">
                
                <NavLink to={"/contact"}> <button className="cursor-pointer bg-gray-700 text-gray-100 px-6 py-2 rounded-full shadow hover:bg-gray-900 transition">
                  Book Now
                </button></NavLink>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={slide.photo}
                alt={slide.title}
                className="h-[300px] md:h-[400px] mt-20 w-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}

        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full transition z-30"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full transition z-30"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h4 className="text-yellow-500 font-semibold text-lg">Our Services</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Aesthetic Treatments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From rejuvenating facials to body sculpting and hair restoration —
            we specialize in modern aesthetic care that enhances your natural beauty.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white shadow-md rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 ${
                expandedId === service.id ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-800 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {expandedId === service.id
                    ? service.longDesc
                    : service.shortDesc}
                </p>

                {expandedId === service.id && (
                  <div className="mt-3 text-gray-600 space-y-2">
                    <p>
                      👉 Safe, non-invasive treatments with clinically proven technology.
                    </p>
                    <p>
                      👉 Personalized consultation and aftercare guidance for every client.
                    </p>
                    <p>
                      👉 Achieve long-lasting natural results with expert care.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => toggleReadMore(service.id)}
                  className="text-yellow-600 font-semibold hover:text-yellow-700 transition mt-3"
                >
                  {expandedId === service.id ? "Show Less ←" : "Read More →"}
                </button>
              </div>
              {/* <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-700"></div> */}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-yellow-500 font-bold text-2xl mb-2 relative">
          Testimonials
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          What Our Clients Say
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover real stories and results from our satisfied clients.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 max-w-sm text-left hover:-translate-y-2"
            >
              <p className="text-gray-800 leading-relaxed mb-4">{t.text}</p>
              {t.reply && (
                <div className="bg-green-100 text-gray-800 text-sm p-3 rounded-lg mb-2">
                  {t.reply}
                </div>
              )}
              {t.image && (
                <img
                  src={"https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczkzLXBhLTQ3MjYtam9iNTgzXzEuanBn.jpg?s=G3oli4IXSqyHGD9rnzlq-PjwW5yYvBHP3ppivwca75Y"}
                  alt="Client testimonial"
                  className="mt-4 rounded-xl w-full h-48 object-cover"
                />
              )}
              <p className="text-right text-xs text-gray-500 mt-3">{t.time}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
