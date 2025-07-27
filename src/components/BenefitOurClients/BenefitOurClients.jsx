"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const testimonials = [
    {
        id: 1,
        name: "Elise Pham",
        role: "Academics Niche",
        image:
            "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/682dea7bd67d81af32f82e73_Elise.jpg",
        view: "Generated 120M+ Views",
        subs: "460K+ Subs",
    },
    {
        id: 2,
        name: "John Doe",
        role: "Finance Influencer",
        image:
            "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/682dea7bd67d81af32f82e73_Elise.jpg",
        view: "80M+ Views",
        subs: "300K Subs",
    },
    {
        id: 3,
        name: "Jane Smith",
        role: "Tech Reviews",
        image:
            "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/682dea7bd67d81af32f82e73_Elise.jpg",
        view: "150M+ Views",
        subs: "550K Subs",
    },
];

const MarqueeRow = ({ direction = "left" }) => {
    return (
        <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden mb-12 px-4">
            <div
                className={classNames(
                    "flex gap-6 whitespace-nowrap animate-marquee",
                    direction === "right" && "animate-marquee-reverse"
                )}
            >
                {[...testimonials, ...testimonials].map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="flex-shrink-0 min-w-[320px] md:min-w-[450px] h-[500px] border border-[#2a2a2a] bg-[#111111] rounded-[20px] overflow-hidden relative flex items-end"
                    >
                        {/* Image */}
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover w-full h-full"
                        />

                        {/* Overlay Details */}
                        <div className="absolute bottom-0 z-20 flex items-center justify-between w-full px-5 pb-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                            {/* Left Text Info */}
                            <div className="flex flex-col gap-1 text-white">
                                <h6 className="text-[26px] font-sans font-normal tracking-tight">{item.name}</h6>
                                <p className="text-[15px] font-normal text-gray-400">{item.role}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-col gap-4 items-end text-xs text-white w-full max-w-[160px]">
                                <div className="inline-block px-5 py-2 border border-gray-500 rounded-full backdrop-blur-lg">
                                    {item.view}
                                </div>

                                <div className="inline-block px-5 py-2 border border-gray-500 rounded-full backdrop-blur-md">
                                    {item.subs}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fading sides */}
            <div className="absolute top-0 left-0 z-30 w-40 h-full pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute top-0 right-0 z-30 w-40 h-full pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
    );
};

const BenefitOurClients = () => {
    return (
        <div className="py-16 overflow-hidden bg-black">
            {/* Heading */}
            <div className="relative z-10 max-w-3xl px-4 mx-auto mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-sm font-semibold tracking-widest text-gray-300 uppercase font-syne"
                >
                    why choose us
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl md:text-4xl pt-2 font-bold font-syne bg-gradient-to-r from-[#898e99] to-gray-400 bg-clip-text text-transparent"
                >
                    Know What
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="pt-2 text-3xl font-semibold text-white font-syne"
                >
                    We Do Differently
                </motion.p>
            </div>

            {/* Marquee Testimonials */}
            <MarqueeRow direction="left" />
        </div>
    );
};

export default BenefitOurClients;
