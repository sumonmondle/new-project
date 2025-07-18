"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import TiltController from "../TiltController/TiltController";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover  flex items-center justify-center px-4 pt-16 pb-14 md:pt-32 bg-top"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679651def5e214bba9495e68_Hero%20Glow%20BG-p-2000.webp')",
      }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg z-0 rounded-lg" />

      <div className="max-w-7xl mx-auto w-full text-center text-[#a8aeb6] relative z-10">
        {/* Header Text */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-geist">
            <span className=" font-syne ">
              <span className="text-white/[#8b8e97]">
                Get More Leads <br />
                Using{" "}
              </span>
            </span>
            <span className="text-white font-syne"> Quality Video Content</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-2">
          <p className="text-lg  text-white/[#8b8e97] max-w-2xl mx-auto">
            We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
          </p>
        </motion.div>

        {/* Team Images */}
        <div className="flex items-center justify-center pb-10 md:flex-row flex-col">
          {/* Images stacked with overlap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[170px] h-20 flex items-center"
          >
            {teamImages.map((src, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-white overflow-hidden shadow-lg"
                style={{ left: `${i * 28}px`, zIndex: teamImages.length - i }} // overlap with offset and zIndex for stacking order
              >
                <Image src={src} alt="Client Photo" width={64} height={64} className="object-cover w-11 h-11 rounded-full" loading="lazy" />
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="">
            {/* Text Content */}
            <div className="text-white/90 max-w-xl text-left">
              <p className="text-sm">Loved by 500+ Businesses worldwide.</p>
              <p className="mt-1 text-sm text-[#8b8e97]">Our Clients Speak for Us</p>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Link
            href="#book-a-call"
            className="inline-flex items-center gap-2 px-6 py-3  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white bg-[#273fb7] p-[14px] rounded-lg font-semibold  transition text-sm text-white hover:opacity-85 hover:[box-shadow:inset_0_0_0_5px_#0003]focus:ring-offset-2 "
          >
            Book a Call
            <Image
              className="bg-[#a8a9cf3b] w-6 h-6 p-2 rounded-full"
              src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
              width={20}
              height={20}
              alt="Arrow Icon"
            />
          </Link>
        </motion.div>

        {/* VideoThumbnail with motion animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <TiltController>
            <VideoThumbnail
              thamnailURL="https://embed-ssl.wistia.com/deliveries/d70c018134211b2cef054003cd784398.webp?image_crop_resized=1920x1080"
              VideoURL="https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE"
            />
          </TiltController>
        </motion.div>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </section>
  );
}

const teamImages = [
  "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039aedeb4bf0f0e7b3ab65_0x0.webp",
  "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af1ab8b6374769d4021_channels4_profile%20(1).jpg",
  "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/6796419e2d5f0387789624ae_Client%20Photo%201.webp",
  "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af8dc4ee14f99625623_channels4_profile%20(3).avif",
  "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af40f8de0d527df7ffd_channels4_profile%20(2).avif",
];
