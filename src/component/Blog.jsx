import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bodyBanner from "../assets/photos/Home/body.jpg";

const Blog = () => {
    const cards = [
        {
            id: 1,
            category: "Uncategorized",
            title: "Birth Mark Removal",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/ZL1zcdT/birthmark.jpg",
            desc: "Birth mark removal is a specialized procedure using laser and skincare technology to reduce various birthmarks safely.",
        },
        {
            id: 2,
            category: "Uncategorized",
            title: "Skin Lightening / Glutathione Treatment",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/LtW5RMk/skinwhitening.jpg",
            desc: "Glutathione treatment is a powerful antioxidant therapy that enhances skin tone and provides a radiant glow.",
        },
        {
            id: 3,
            category: "Uncategorized",
            title: "Weight Loss / Inch Loss",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/mTDxYrN/weightloss.jpg",
            desc: "Body contouring with modern technology to reduce fat and shape your body effectively and safely.",
        },
        {
            id: 4,
            category: "Uncategorized",
            title: "Laser Hair Removal",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/nCScKCr/laserhair.jpg",
            desc: "Permanent hair reduction using advanced laser systems suitable for all skin types.",
        },
        {
            id: 5,
            category: "Uncategorized",
            title: "Acne Scar Treatment",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/LJ4yDS4/acnescar.jpg",
            desc: "Rejuvenate your skin with effective acne scar removal solutions that restore smoothness and clarity.",
        },
        {
            id: 6,
            category: "Uncategorized",
            title: "Anti-Aging Therapy",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/TKdg8yD/antiaging.jpg",
            desc: "Reduce wrinkles and fine lines with advanced anti-aging treatments and skin tightening technology.",
        },
        {
            id: 7,
            category: "Uncategorized",
            title: "Tattoo Removal",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/kJ0mcC8/tattoo.jpg",
            desc: "Safe and effective laser tattoo removal for all colors and sizes with minimal discomfort.",
        },
        {
            id: 8,
            category: "Uncategorized",
            title: "Hydra Facial",
            date: "January 7, 2025",
            author: "admin",
            image:
                "https://i.ibb.co/gV8PbFp/hydrafacial.jpg",
            desc: "Deep cleansing and hydration facial that leaves your skin glowing and refreshed instantly.",
        },
    ];

    return (
        <>
            <Navbar />

            <div
                className="relative w-full h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${bodyBanner})` }}
            >
                <div className="absolute inset-0 bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 md:px-20">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mt-8 md:mt-0 drop-shadow-lg">
                        BLOG
                    </h1>
                    <div className="text-lg text-gray-200 font-semibold mt-4 md:mt-0">
                        Home <span className="text-blue-400">›</span> Body Contouring & Skin
                    </div>
                </div>
            </div>
            <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Latest Treatments
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Discover our advanced aesthetic and skincare solutions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-rose-200"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-5 text-left">
                                <p className="text-rose-500 font-medium text-sm mb-1">
                                    {card.category}
                                </p>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    {card.author} / {card.date}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
