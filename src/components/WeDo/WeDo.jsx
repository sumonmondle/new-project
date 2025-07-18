"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

const cards = [
    {
        title: "Youtube Videos",
        description: "Grow a personal brand in any niche with our trendy edits.",
        image: "/images/14b.avif",
    },
    {
        title: "Short Form Videos",
        description: "Byte sized top of the funnel videos for Instagram Reels and Tiktok",
        image: "/images/1b.avif",
    },
    {
        title: "Podcast Editing",
        description: "Organic podcasts to build trust and create credibility among your audience.",
        image: "/images/2b.avif",
    },
    {
        title: "Ad Creatives & VSLs",
        description: "Create dynamic content and convert more leads with paid ads.",
        image: "/images/3b.png",
    },
];

const MarqueeRow = ({ direction }) => {
    return (
        <div className="relative w-full max-w-[944px] mx-auto overflow-hidden bg-black">
            <div
                className={classNames(
                    "flex gap-6 animate-marquee whitespace-nowrap", // continuous scroll
                    direction === "right" ? "animate-marquee-reverse" : ""
                )}
            >
                {[...cards, ...cards].map((card, index) => (
                    <div
                        key={index}
                        className="relative p-4 text-center transition-transform duration-300 bg-black shadow-xl w-72 shrink-0 rounded-xl hover:scale-105"
                    >
                        <div className="relative w-full h-40 mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-800">{card.title}</h3>
                        <p className="text-sm text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>

            {/* Side overlay */}
            <div className="absolute top-0 left-0 z-20 w-32 h-full pointer-events-none bg-gradient-to-r from-[--primary-black] via-[--primary-black]/0 to-transparent" />
            <div className="absolute top-0 right-0 z-20 w-32 h-full pointer-events-none bg-gradient-to-l from-[--primary-black] via-[--primary-black]/0 to-transparent" />
        </div>
    );
};

const WeDo = () => {
    return (
        <div className="py-16 bg-black">
            {/* Heading */}
            <div className="relative z-10 max-w-3xl mx-auto mb-10 text-center">
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
                    className="pt-2 text-3xl font-semibold font-syne"
                >
                    We Do Differently
                </motion.p>
            </div>

            {/* Marquee Cards */}
            <MarqueeRow direction="left" />
            <MarqueeRow direction="right" />
        </div>
    );
};

export default WeDo;