"use client";

import { useState } from "react";

export default function VideoThumbnail({ thamnailURL, VideoURL }) {
  console.log(thamnailURL, VideoURL);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative max-w-4xl mx-auto rounded-lg overflow-hidden cursor-pointer w-full"
      style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
    >
      {!isPlaying ? (
        <>
          {/* Custom Thumbnail Image */}
          <img
            src={thamnailURL}
            alt="Video Thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
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
          {/* YouTube iframe */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={VideoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
  );
}
