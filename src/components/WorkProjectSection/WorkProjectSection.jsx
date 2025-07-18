"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function WorkProjectSection() {
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null); // track which video is playing

  const data = [
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://embed-ssl.wistia.com/deliveries/8ffb0fc08041438f62090b66379c841a.webp?image_crop_resized=1920x1130",
      category: "Youtube Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://embed-ssl.wistia.com/deliveries/8ffb0fc08041438f62090b66379c841a.webp?image_crop_resized=1920x1130",
      category: "Youtube Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://embed-ssl.wistia.com/deliveries/8ffb0fc08041438f62090b66379c841a.webp?image_crop_resized=1920x1130",
      category: "Youtube Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://embed-ssl.wistia.com/deliveries/8ffb0fc08041438f62090b66379c841a.webp?image_crop_resized=1920x1130",
      category: "Youtube Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Youtube Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Shorts",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "SAAS Videos",
    },
    {
      videoURL: "https://www.youtube.com/embed/xVqZ6ZSeMW4",
      thumbnailURL: "https://i3.ytimg.com/vi/xVqZ6ZSeMW4/maxresdefault.jpg",
      category: "Ad Creatives & VSL",
    },
  ];

  useEffect(() => {
    setVideos(data);
    const cats = Array?.from(new Set(data?.map((v) => v?.category)));
    setCategories(cats);
    setActiveCategory(cats[0]);
  }, []);

  const filteredVideos = videos?.filter((v) => v?.category === activeCategory);

  return (
    <div className="bg-black text-white pt-10">
      {/* Heading */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="inline-block text-sm font-semibold uppercase tracking-[1px] px-4 py-1 rounded-full mb-4"
        >
          our work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#898e99] to-gray-400 bg-clip-text text-transparent"
        >
          Some of our
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-3xl pt-2 font-semibold"
        >
          featured projects
        </motion.div>
      </div>

      {/* Tabs */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
        <div className="flex flex-wrap gap-3 justify-center mb-8 px-4 sm:px-6 md:px-10 lg:px-[200px] xl:px-[300px] 2xl:px-[450px]">
          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPlayingIndex(null);
              }}
              className={`px-[14px] py-[8px] tracking-[1px] text-sm font-sans transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#273fb7] text-white font-semibold rounded-[10px]"
                  : " border-gray-500 text-[#9eadb9] hover:bg-gray-800 rounded-[10px]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          <div
            className={`grid gap-6 max-w-5xl mx-auto px-4 ${
              activeCategory === "Shorts" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
            }`}
          >
            {filteredVideos?.map((video, idx) => {
              const isShorts = video?.category === "Shorts";
              const aspectRatio = isShorts ? "177.77%" : "56.25%"; // 9:16 or 16:9

              return (
                <div key={idx} className="relative w-full rounded-lg overflow-hidden cursor-pointer" style={{ paddingTop: aspectRatio }}>
                  {playingIndex === idx ? (
                    <>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={video?.videoURL}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button
                        onClick={() => setPlayingIndex(null)}
                        className="absolute top-2 right-2 z-50 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
                        aria-label="Close video"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={video?.thumbnailURL}
                        alt="Video Thumbnail"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                        onClick={() => setPlayingIndex(idx)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WorkProjectSection;
