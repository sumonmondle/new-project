"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const slides = [
  {
    videoThumbnail: "https://embed-ssl.wistia.com/deliveries/512386a4608ebf387ed0991650d90e8797ecaef2.webp?image_crop_resized=1080x1920",
    videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
    caption: "I have nothing but great things to say. They definitely helped me kickstart everything that I've done on on YouTube",
    user: {
      name: "Spencer Pawliw",
      profaction: "Skool Games Winner",
      avatar: "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68035577b876fec0846e9f77_channels4_profile.avif",
    },
  },
  {
    videoThumbnail: "https://embed-ssl.wistia.com/deliveries/512386a4608ebf387ed0991650d90e8797ecaef2.webp?image_crop_resized=1080x1920",
    videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
    caption: "I have nothing but great things to say. They definitely helped me kickstart everything that I've done on on YouTube",
    user: {
      name: "Spencer Pawliw",
      profaction: "Skool Games Winner",
      avatar: "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68035577b876fec0846e9f77_channels4_profile.avif",
    },
  },
  {
    videoThumbnail: "https://embed-ssl.wistia.com/deliveries/512386a4608ebf387ed0991650d90e8797ecaef2.webp?image_crop_resized=1080x1920",
    videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
    caption: "I have nothing but great things to say. They definitely helped me kickstart everything that I've done on on YouTube",
    user: {
      name: "Spencer Pawliw",
      profaction: "Skool Games Winner",
      avatar: "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68035577b876fec0846e9f77_channels4_profile.avif",
    },
  },
  {
    videoThumbnail: "https://embed-ssl.wistia.com/deliveries/512386a4608ebf387ed0991650d90e8797ecaef2.webp?image_crop_resized=1080x1920",
    videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
    caption: "I have nothing but great things to say. They definitely helped me kickstart everything that I've done on on YouTube",
    user: {
      name: "Spencer Pawliw",
      profaction: "Skool Games Winner",
      avatar: "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68035577b876fec0846e9f77_channels4_profile.avif",
    },
  },
];

export default function AboutUsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsPlaying(false); // স্লাইড পরিবর্তনের সাথে ভিডিও বন্ধ থাকবে
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsPlaying(false); // স্লাইড পরিবর্তনের সাথে ভিডিও বন্ধ থাকবে
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black px-4">
      <div className="relative flex items-center justify-center w-full max-w-screen-xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 xl:left-[14rem] md:left-[6rem] top-1/2 transform -translate-y-1/2 bg-[#191a1f] text-white hover:scale-110 transition z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slider Content */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-white text-center max-w-full"
          >
            <div
              className="relative w-[300px] h-[533px] mx-auto rounded-2xl overflow-hidden cursor-pointer bg-black"
              style={{ position: "relative" }}
            >
              {!isPlaying ? (
                <>
                  {/* Thumbnail Image */}
                  <img
                    src={slides[current].videoThumbnail}
                    alt="Video Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                    onClick={() => setIsPlaying(true)}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Video iframe */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src={slides[current].videoURL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay
                  ></iframe>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-2 right-2 z-50 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                    aria-label="Close video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="mt-[10px] mb-[10px] text-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.17 6A5 5 0 0 0 3 11v5a1 1 0 0 0 1 1h5v-6H5.1a3 3 0 0 1 2.07-5Zm10 0A5 5 0 0 0 13 11v5a1 1 0 0 0 1 1h5v-6h-3.9a3 3 0 0 1 2.07-5Z" />
                </svg>

                <p className="text-white font-medium leading-[1.4] font-syne tracking-[2px] text-xl/none sm:text-2xl md:text-[30px] max-w-[42rem] mx-auto ">
                  “{slides[current].caption}”
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Image
                  src={slides[current].user.avatar}
                  alt={slides[current].user.name}
                  width={50}
                  height={50}
                  className="rounded-full border border-gray-400 object-cover"
                />
                <div className="flex flex-col text-left">
                  <p className="text-lg font-semibold text-white font-syne">{slides[current].user.name}</p>
                  <p className=" text-gray-400 font-syne">{slides[current].user.profaction}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 xl:right-[14rem] md:right-[6rem] top-1/2 transform -translate-y-1/2 bg-[#191a1f] text-white hover:scale-110 transition z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center"
          aria-label="Next Slide"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
