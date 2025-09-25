// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
// import TiltController from "../TiltController/TiltController";
// import useHeaderVideo from "@/hook/useHeaderVideo";

// export default function HeroSection() {
//   const { isPending, error, headerVideo, refetch } = useHeaderVideo();
//   const defaultVideo = {
//     thumbnail: "https://embed-ssl.wistia.com/deliveries/d70c018134211b2cef054003cd784398.webp?image_crop_resized=1920x1080",
//     src: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
//   };

//   const videoToRender = headerVideo && headerVideo?.src ? headerVideo : defaultVideo;
//   return (
//     <section
//       className="relative flex items-center justify-center w-full min-h-screen px-4 bg-top bg-cover pt-28 pb-14 md:pt-40"
//       style={{
//         backgroundImage: "url('https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679651def5e214bba9495e68_Hero%20Glow%20BG-p-2000.webp')",
//       }}
//     >
//       {/* Glass effect overlay */}
//       <div className="absolute inset-0 z-0 rounded-lg bg-white/10 backdrop-blur-lg" />

//       <div className="max-w-7xl mx-auto w-full text-center text-[#a8aeb6] relative z-10">
//         {/* Header Text */}
//         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
//           <h1 className="text-4xl font-bold leading-tight md:text-6xl font-geist">
//             <span className=" font-syne">
//               <span className="text-white/[#8b8e97]">
//                 Get More Leads <br />
//                 Using{" "}
//               </span>
//             </span>
//             <span className="text-white font-syne"> Quality Video Content</span>
//           </h1>
//         </motion.div>

//         {/* Subtitle */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-2">
//           <p className="text-lg  text-white/[#8b8e97] max-w-2xl mx-auto">
//             We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
//           </p>
//         </motion.div>

//         {/* Team Images */}
//         <div className="flex flex-col items-center justify-center pb-10 md:flex-row">
//           {/* Images stacked with overlap */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative w-[170px] h-20 flex items-center"
//           >
//             {teamImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="absolute overflow-hidden border-2 border-white rounded-full shadow-lg"
//                 style={{ left: `${i * 28}px`, zIndex: teamImages.length - i }} // overlap with offset and zIndex for stacking order
//               >
//                 <Image src={src} alt="Client Photo" width={64} height={64} className="object-cover rounded-full w-11 h-11" loading="lazy" />
//               </div>
//             ))}
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="">
//             {/* Text Content */}
//             <div className="max-w-xl text-left text-white/90">
//               <p className="text-sm">Loved by 500+ Businesses worldwide.</p>
//               <p className="mt-1 text-sm text-[#8b8e97]">Our Clients Speak for Us</p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Button */}
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
//           <Link
//             href="#book-a-call"
//             className="inline-flex items-center gap-2 px-6 py-3  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white bg-[#273fb7] p-[14px] rounded-lg font-semibold  transition text-sm text-white hover:opacity-85 hover:[box-shadow:inset_0_0_0_5px_#0003]focus:ring-offset-2 "
//           >
//             Book a Call
//             <Image
//               className="bg-[#a8a9cf3b] w-6 h-6 p-2 rounded-full"
//               src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
//               width={20}
//               height={20}
//               alt="Arrow Icon"
//             />
//           </Link>
//         </motion.div>

//         {/* VideoThumbnail with motion animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="max-w-4xl mx-auto"
//         >
//           <TiltController>
//             <VideoThumbnail
//               thamnailURL={videoToRender?.thumbnail}
//               VideoURL={videoToRender?.src}
//             />
//           </TiltController>
//         </motion.div>
//       </div>

//       {/* Optional dark overlay */}
//       <div className="absolute inset-0 z-0 bg-black/30" />
//     </section>
//   );
// }

// const teamImages = [
//   "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039aedeb4bf0f0e7b3ab65_0x0.webp",
//   "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af1ab8b6374769d4021_channels4_profile%20(1).jpg",
//   "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/6796419e2d5f0387789624ae_Client%20Photo%201.webp",
//   "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af8dc4ee14f99625623_channels4_profile%20(3).avif",
//   "https://cdn.prod.website-files.com/6796419e2d5f03877896246e/68039af40f8de0d527df7ffd_channels4_profile%20(2).avif",
// ];




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import TiltController from "../TiltController/TiltController";
import useHeaderVideo from "@/hook/useHeaderVideo";

export default function HeroSection() {
  const { isPending, error, headerVideo, refetch } = useHeaderVideo();
  const defaultVideo = {
    thumbnail:
      "https://embed-ssl.wistia.com/deliveries/d70c018134211b2cef054003cd784398.webp?image_crop_resized=1920x1080",
    src: "https://www.youtube.com/embed/xVqZ6ZSeMW4?si=C0jmHz5yMCQE15kE",
  };

  const videoToRender =
    headerVideo && headerVideo?.src ? headerVideo : defaultVideo;

  return (
    <section className="relative flex flex-col items-center justify-start w-full min-h-screen px-4 overflow-hidden bg-black pt-28 pb-14 md:pt-40">
      <div className="max-w-7xl mx-auto w-full text-center text-[#a8aeb6] relative z-10">
        {/* ===== Text Area (with background circles) ===== */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Background Rounded Lines (only behind text) */}
          {/* <div className="absolute inset-0 flex items-center justify-center -z-10">
  <div className="absolute w-[600px] h-[600px] rounded-full border-l border-r border-white/20"></div>
  <div className="absolute w-[900px] h-[900px] rounded-full border-l border-r border-white/20"></div>
  <div className="absolute w-[1200px] h-[1200px] rounded-full border-l border-r border-white/20"></div>
</div> */}

          <div className="absolute inset-0 flex items-center justify-center -z-10">


            <div
              className="absolute w-[600px] h-[600px] rounded-full border-l border-r border-white/20 
               opacity-0 animate-circle-1">
            </div>


            <div
              className="absolute w-[900px] h-[900px] rounded-full border-l border-r border-white/20 
               opacity-0 animate-circle-2">
            </div>


            <div
              className="absolute w-[1200px] h-[1200px] rounded-full border-l border-r border-white/20 
               opacity-0 animate-circle-3">
            </div>
          </div>


          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl font-bold leading-tight md:text-6xl font-geist">
              <span className=" font-syne">
                <span className="text-white/[#8b8e97]">
                  Get More Leads <br />
                  Using{" "}
                </span>
              </span>
              <span className="text-white font-syne"> Quality Video Content</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-2"
          >
            <p className="text-lg  text-white/[#8b8e97] max-w-2xl mx-auto">
              We help entrepreneurs and businesses with Done-For-You organic
              content systems that generate leads on autopilot.
            </p>
          </motion.div>

          {/* Team Images */}
       <div className="flex flex-col items-center justify-center pb-10 cursor-pointer md:flex-row">
      
      {/* প্রথম motion.div: টিম ইমেজগুলো ধারণ করে
        এখানে hover-spread-container ক্লাসটি যোগ করা হয়েছে
      */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-[170px] h-20 flex items-center hover-spread-container"
      >
        {teamImages.map((src, i) => (
          <div
            key={i}
            // team-image-wrapper ক্লাসটি এখানে যোগ করা হয়েছে
            className="absolute overflow-hidden border-2 border-white rounded-full shadow-lg team-image-wrapper"
            style={{
              left: `${i * 28}px`,
              zIndex: teamImages.length - i,
            }}
          >
            <Image
              src={src}
              alt="Client Photo"
              width={64}
              height={64}
              className="object-cover rounded-full w-11 h-11"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      {/* দ্বিতীয় motion.div: টেক্সট কন্টেন্ট
        আপনার whileInView অ্যানিমেশনটি স্ক্রল করার সময় এটিও মসৃণভাবে দেখাবে
      */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className=""
      >
        <div className="max-w-xl text-left text-white/90">
          <p className="text-sm">Loved by 500+ Businesses worldwide.</p>
          <p className="mt-1 text-sm text-[#8b8e97]">
            Our Clients Speak for Us
          </p>
        </div>
      </motion.div>
    </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
        </div>

        {/* ===== Video Section (no background lines here) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-10"
        >
          <TiltController>
            <VideoThumbnail
              thamnailURL={videoToRender?.thumbnail}
              VideoURL={videoToRender?.src}
            />
          </TiltController>
        </motion.div>
      </div>
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

