import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Clock } from "lucide-react";
import img from "../assets/photos/logo.jpg"

export default function Footer() {
    return (
        <footer className="bg-blue-500 text-gray-800 font-semibold py-10 px-6 md:px-16">
            <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
                {/* Logo & Description */}
                <div>
                    <img
                        src={img}
                        alt="The Royal Skin Aesthetics"
                        className="w-26 mb-4 rounded-full"
                    />
                    <p className="text-sm leading-relaxed">
                        At The Glorita Aesthetic Clinic, we prioritize your unique beauty
                        goals and provide a personalized experience to ensure you feel
                        confident in your skin.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-5">
                        <a
                            href="#"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-transform transform hover:scale-110"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-transform transform hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-transform transform hover:scale-110"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3 relative">
                        Quick Links
                        <span className="block w-12 h-[2px] bg-yellow-500 mt-1"></span>
                    </h3>
                    <ul className="space-y-2">
                        {["About Us", "Services", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="hover:text-yellow-500 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3 relative">
                        Useful Links
                        <span className="block w-12 h-[2px] bg-yellow-500 mt-1"></span>
                    </h3>
                    <ul className="space-y-2">
                        {["Cookie Policy", "Book An Appointment"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="hover:text-yellow-500 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Book an Appointment */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3 relative">
                        Book an Appointment
                        <span className="block w-12 h-[2px] bg-yellow-500 mt-1"></span>
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Clock size={18} className="text-yellow-500" />
                            Monday - Saturday 10am–4pm
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={18} className="text-yellow-500" />
                            Sundays – Off
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-6 text-gray-200">
                <p>
                    Developed and managed by{" "}
                    <a
                        href="#"
                        className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                        LK TECHNOLOGY
                    </a>
                </p>
                <p>Copyright © 2025 GLORITA. All rights reserved.</p>
            </div>
        </footer>
    );
}
