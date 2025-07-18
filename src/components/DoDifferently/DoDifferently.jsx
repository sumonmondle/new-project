"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function DoDifferently() {
  return (
    <div className="relative bg-black text-white overflow-hidden pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Glowing Background Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="bg-white/10 w-[700px] h-[700px] rounded-full blur-[100px] opacity-80 mix-blend-overlay"></div>

        {/* Blue Glow Layer 1 – Sharp Blue Core */}
        <Image
          src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
          alt="Glow"
          width={600}
          height={600}
          className="absolute -top-[120px] -left-[300px] w-[800px] h-[600px] object-cover opacity-100 blur-[50px] brightness-1000 saturate-[180%] mix-blend-screen"
        />

        {/* Blue Glow Layer 2 – Soft Wide Halo */}
        <Image
          src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
          alt="Glow"
          width={600}
          height={600}
          className="absolute -top-[300px] -left-[300px] w-[800px] h-[600px] object-cover opacity-100 blur-[660px] brightness-900 saturate-[200%] mix-blend-screen"
        />
      </div>

      {/* Heading Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="uppercase text-sm font-semibold font-syne tracking-widest text-gray-300"
        >
          why choose us
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-syne md:text-4xl pt-2 font-bold bg-gradient-to-r from-[#898e99] to-gray-400 bg-clip-text text-transparent"
        >
          Know What
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl font-syne pt-2 font-semibold"
        >
          We Do Differently
        </motion.p>
      </div>

      {/* Pricing Card */}

      <div className="md:w-[60rem] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative bg-gradient-to-b from-[#1e2230] via-[#0e0e0f] to-black rounded-[24px] p-9 text-white md:w-[470px] w-full mx-auto shadow-xl overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="">
              <div className="flex items-center gap-3 mb-6 relative">
                <Image
                  src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679730756024f0575fc9327f_Mz%20media%20logo.avif"
                  alt="Company Logo"
                  width={80}
                  height={40}
                  className="w-60 h-16"
                />
                <Image
                  src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f48af45ca11634cdee639_Arrow.svg"
                  alt="Arrow"
                  width={30}
                  height={30}
                  className="h-6 w-6 absolute left-20 top-11"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="">
              <ul className="flex flex-col gap-y-[21px] pt-[7px] pb-[6px] text-[16px] font-sans ">
                {[
                  "In house team of 40+ Experts",
                  "Results oriented",
                  "Experience with 500+ Clients",
                  "Proven DFY Content Funnel",
                  "Personalised CRM",
                  "24/7 Support, Anytime You Need Us",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                    <Image
                      src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/6796419e2d5f03877896253e_Tick%20Mark.svg"
                      alt="Tick"
                      width={18}
                      height={18}
                      className="mt-[3px]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="">
              <div className="w-full mt-10 rounded-[12px] border border-[#333] bg-gradient-to-b from-[#181818] to-[#000] text-white p-5 flex flex-col gap-2">
                <h4 className="font-semibold text-base  mb-4">Bonuses you get with us:</h4>

                <ul className="flex flex-col gap-y-[21px] pt-[7px] pb-[6px] text-[16px] font-sans">
                  {["Free Go High Level Subscription", "Free 1-on-1 Consultancy"].map((bonus, idx) => (
                    <li key={idx} className="flex items-center gap-[13px] opacity-100 [transform-style:preserve-3d]">
                      <Image
                        src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f916c5fe0a2a75fbc4d47_Check%20Icon.svg"
                        alt="Check"
                        width={18}
                        height={18}
                        className="mt-[3px] shrink-0"
                      />
                      <span className="text-sm sm:text-base">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* SECOND */}

          <div className="relative bg-gradient-to-b from-[#1e2230] via-[#0e0e0f] to-black rounded-[24px] p-9 text-white md:w-[370px] w-full mx-auto shadow-xl overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="">
              <div className="flex items-center justify-start gap-3 mb-6 opacity-100 [transform-style:preserve-3d]">
                <h3 className="text-[30px] font-semibold font-syne tracking-wide">Other Agencies</h3>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="">
              <ul className="flex flex-col gap-y-[21px] pt-[7px] pb-[6px] text-[16px] font-sans text-[#ffffff8f]">
                {[
                  "Unreliable Freelancers with slow turnarounds",
                  "Edits that fail to convert or perform.",
                  "Weak thumbnails and titles with no CTR strategy.",
                  "Lack of proper distribution systems",
                  "No expertise in funnels or lead capture systems.",
                  "Limited revisions with no client-focused approach.",
                  "Guesswork instead of data-driven decisions.",
                  "Delayed responses and poor communication.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-[21px]">
                    <Image
                      src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/6798b2f66c254b4661355946_Close_MD.svg"
                      alt="Tick"
                      width={18}
                      height={18}
                      className="mt-[3px] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="">
        <div className="w-full flex justify-center items-center py-10">
          <a
            href="#book-a-call"
            className="inline-flex items-center gap-2 bg-[#4355e4] hover:bg-[#273fb7] text-white font-semibold px-[25px] py-[14px] rounded-lg transition duration-300 hover:opacity-90
           hover:[box-shadow:inset_0_0_0_2px_rgba(255,255,255,0.08),inset_0_0_10px_rgba(255,255,255,0.06)] "
          >
            <div>Book a 30-min call</div>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67970745c860818130bc7fd6_Arrow_Up_Right.svg"
              alt="Arrow icon"
              className="w-[26px] h-[26px] bg-[#a8a9cf3b] rounded-full p-2"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default DoDifferently;
