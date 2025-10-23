import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStethoscope, FaDollarSign, FaUserMd } from "react-icons/fa";
import Footer from "./Footer";

const slides = [
    {
        id: 1,
        title: "Lorem Ipsum is",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        bgColor: "bg-gray-200",
    },
    {
        id: 2,
        title: "Creative Design",
        description:
            "We create innovative and elegant web experiences using modern technologies and creative thinking that captivate users and drive results.",
        bgColor: "bg-gray-100",
    },
    {
        id: 3,
        title: "Professional Team",
        description:
            "Our professional team combines creativity with technical expertise to deliver seamless and visually stunning digital experiences.",
        bgColor: "bg-gray-200",
    },
];

const services = [
    {
        id: 1,
        title: "Laser Hair Reduction",
        shortDesc: "Achieve smooth, hair-free skin with our advanced laser treatments.",
        longDesc:
            "Our laser hair reduction procedure uses advanced diode laser technology to gently target and eliminate unwanted hair from the root, ensuring long-lasting smoothness without damaging the skin.",
        img: "https://images.unsplash.com/photo-1616827150572-c52b9df3f1b4",
    },
    {
        id: 2,
        title: "Botox Injection",
        shortDesc: "Smooth fine lines and wrinkles for a youthful look.",
        longDesc:
            "Our Botox injections relax facial muscles to reduce wrinkles, fine lines, and other visible signs of aging, helping you maintain a refreshed and natural appearance.",
        img: "https://images.unsplash.com/photo-1606813903174-91336b53d0d1",
    },
    {
        id: 3,
        title: "PRP Face & Scalp",
        shortDesc: "Rejuvenate your skin and scalp with PRP therapy.",
        longDesc:
            "PRP (Platelet-Rich Plasma) therapy uses your body’s natural healing platelets to stimulate collagen, improve skin texture, and enhance hair growth effectively and safely.",
        img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    },
    {
        id: 4,
        title: "Hydra Facial",
        shortDesc: "Deep cleansing and hydration for glowing skin.",
        longDesc:
            "The HydraFacial cleanses, extracts, and hydrates using super serums rich in antioxidants, peptides, and hyaluronic acid — perfect for instant glow and long-term skin health.",
        img: "https://images.unsplash.com/photo-1624227187458-bf0f8cb7c4a8",
    },
    {
        id: 5,
        title: "Body Contouring",
        shortDesc: "Tone and sculpt your body without surgery.",
        longDesc:
            "Our non-surgical body contouring uses radiofrequency and ultrasound energy to reduce fat, tighten skin, and enhance body shape with minimal downtime.",
        img: "https://images.unsplash.com/photo-1588776814546-ec9c386b0b9e",
    },
    {
        id: 6,
        title: "Hair Transplant",
        shortDesc: "Restore your natural hairline confidently.",
        longDesc:
            "Our hair transplant experts use the latest FUE and FUT techniques to deliver natural-looking results with maximum density and comfort.",
        img: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa",
    },
];

import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: `Aoa Dr. Maimoona hope you fine. I wanted to update you about my PRP post treatment that I had yesterday with you. I am feeling good Alhamdulillah so far, taking all the precautions advised by you and satisfied from your treatment. Thank you.`,
        reply: `Thank you for contacting The Royal Skin Aesthetics! Please let us know how we can help you.`,
        time: "9:01 pm",
    },
    {
        id: 2,
        text: `Assalam o alaikum! Client review time: I got 2 IVs for immunity boosters! I have noticed a significant smoothness in my skin. And the two-tone texture is improved. One of the very significant differences which I noticed is that my lips feel very hydrated, plumped and pinkish.`,
        image: "/images/lips.jpg",
        time: "4:23 pm",
    },
];


const Home = () => {

    const [expandedId, setExpandedId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div>

            <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden z-40">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-6 md:px-16 transition-all duration-700 ease-in-out ${index === current
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            } ${slide.bgColor}`}
                    >
                        <p className="uppercase text-[10px] tracking-widest text-gray-500 mb-2">
                            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPE
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#9c7b6b] mb-4">
                            {slide.title}
                        </h2>
                        <p className="text-gray-600 max-w-xl mb-6">{slide.description}</p>
                        <div className="flex gap-4">
                            <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
                                Lorem Ipsum Is Simply Dummy
                            </button>
                            <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
                                Lorem Ipsum
                            </button>
                        </div>
                    </div>
                ))}

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-300/40 transition"
                >
                    <FaChevronLeft className="text-gray-700 text-xl" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-300/40 transition"
                >
                    <FaChevronRight className="text-gray-700 text-xl" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-gray-700" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h4 className="text-yellow-500 font-semibold text-sm mb-2 uppercase tracking-wide">
                            About The Royal Skin Aesthetics Clinic
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                            Transforming Skincare with <br />
                            <span className="text-yellow-600">
                                Advanced Aesthetic Solutions
                            </span>{" "}
                            Since 2023
                        </h2>
                        <p className="text-gray-700 mb-6">
                            At The Royal Skin Aesthetics Clinic, located in F7, Islamabad, we
                            offer cutting-edge{" "}
                            <a href="#" className="text-yellow-500 hover:underline">
                                skincare treatments
                            </a>{" "}
                            designed to enhance your natural beauty and restore confidence in
                            your skin. Our mission is to provide personalized care that makes
                            every patient feel their best.
                        </p>

                        {/* Features */}
                        <div className="space-y-5">
                            <div className="flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg text-2xl">
                                    <FaStethoscope />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-600">
                                        Modern Technology
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        We utilize state-of-the-art technology to deliver effective
                                        and minimally invasive treatments, ensuring the best results
                                        for your unique skin care needs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="bg-black text-yellow-500 p-3 rounded-lg text-2xl">
                                    <FaDollarSign />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-600">
                                        Affordable Pricing
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        We believe in accessible skincare solutions, offering a range
                                        of treatments at competitive prices without compromising on
                                        quality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg text-2xl">
                                    <FaUserMd />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-600">
                                        Certified Doctor
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Our team of certified skincare professionals is dedicated to
                                        providing the highest standard of care, ensuring every patient
                                        receives expert guidance and personalized treatment plans.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-8 bg-yellow-400 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition">
                            More About Us
                        </button>
                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1612103837233-9d4b3a8ef2c2"
                            alt="Skincare Treatment"
                            className="rounded-2xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1612103837128-4c90c3a4b7c4"
                            alt="Facial"
                            className="rounded-2xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1620912189867-7c8a029127f9"
                            alt="Injection"
                            className="col-span-2 rounded-2xl w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h4 className="text-yellow-500 font-semibold text-lg">Our Services</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Service We Offer
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide advanced aesthetic treatments designed to help you look and feel your best.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    {expandedId === service.id ? service.longDesc : service.shortDesc}
                                </p>
                                <button
                                    onClick={() => toggleReadMore(service.id)}
                                    className="text-yellow-600 font-semibold hover:text-yellow-700 transition"
                                >
                                    {expandedId === service.id ? "Show Less ←" : "Read More →"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 px-6 md:px-16 bg-white text-center">
                {/* Header */}
                <h2 className="text-yellow-500 font-bold text-2xl mb-2 relative">
                    Testimonials
                    <div className="w-16 h-[2px] bg-yellow-500 mx-auto mt-1"></div>
                </h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                    What Our Clients Say
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Discover firsthand testimonials from our satisfied clients, sharing
                    their experiences and successes with our exceptional services.
                </p>

                {/* Testimonials Cards */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="relative bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 max-w-sm text-left hover:-translate-y-2"
                        >
                            <p className="text-gray-800 leading-relaxed mb-4">{t.text}</p>
                            {t.reply && (
                                <div className="bg-green-100 text-gray-800 text-sm p-3 rounded-lg mb-2">
                                    {t.reply}
                                </div>
                            )}
                            {t.image && (
                                <div className="mt-4 rounded-xl overflow-hidden">
                                    <img
                                        src={t.image}
                                        alt="Client testimonial"
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <p className="text-right text-xs text-gray-500 mt-3">{t.time}</p>

                            {/* Optional nav arrows */}
                            {t.id === 1 && (
                                <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full cursor-pointer hover:bg-yellow-600 transition">
                                    <ChevronLeft size={18} />
                                </div>
                            )}
                            {t.id === testimonials.length && (
                                <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full cursor-pointer hover:bg-yellow-600 transition">
                                    <ChevronRight size={18} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
