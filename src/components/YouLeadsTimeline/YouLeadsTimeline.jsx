"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import TextSwitcher from "@/common/TextSwitcher/TextSwitcher";

import Lottie from "lottie-react";
import animationData from "../../data/step5-animation.json";

function YouLeadsTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const stepsRef = useRef([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const containerRef = useRef(null);

  // Step 1
  const step1Ref = useRef(null);
  const { scrollYProgress: step1Scroll } = useScroll({
    target: step1Ref,
    offset: ["start end", "end start"],
  });

  // Step 2
  const step2Ref = useRef(null);
  const { scrollYProgress: step2Scroll } = useScroll({
    target: step2Ref,
    offset: ["start end", "end start"],
  });
  // Step 3
  const step3Ref = useRef(null);
  const { scrollYProgress: step3Scroll } = useScroll({
    target: step3Ref,
    offset: ["start end", "end start"],
  });
  // Step 4
  const step4Ref = useRef(null);
  const { scrollYProgress: step4Scroll } = useScroll({
    target: step4Ref,
    offset: ["start end", "end start"],
  });

  const lineHeightMap = {
    1: "h-[100px]",
    2: "h-[250px]",
    3: "h-[400px]",
    4: "h-[550px]",
  };

  // Tag animations: Upward tags move outward
  const tag1X = useTransform(step1Scroll, [0, 1], ["0%", "50%"]);
  const tag1Y = useTransform(step1Scroll, [0, 1], ["0%", "50%"]);
  const tag2X = useTransform(step1Scroll, [0, 1], ["0%", "-60%"]);
  const tag2Y = useTransform(step1Scroll, [0, 1], ["40%", "0%"]);

  // Step 2
  const tag3X = useTransform(step2Scroll, [0, 0.5, 1], ["40%", "45%", "40%"]);
  const tag3Y = useTransform(step2Scroll, [0, 1], ["-15%", "0%"]);

  // Step 3
  const tag4X = useTransform(step3Scroll, [0, 0.5, 1], ["30%", "30%", "30%"]);
  const tag4Y = useTransform(step3Scroll, [0, 0.5, 1], ["0%", "10%", "35%"]);
  const tag5X = useTransform(step3Scroll, [0, 0.5, 1], ["130%", "157%", "130%"]);
  const tag5Y = useTransform(step3Scroll, [0, 0.5, 1], ["17%", "11%", "17%"]);

  // Step 4
  const tag8X = useTransform(step4Scroll, [0, 0.5, 1], ["135%", "137%", "135%"]);
  const tag8Y = useTransform(step4Scroll, [0, 0.5, 1], ["-20%", "-95%", "-20%"]);
  const img1X = useTransform(step4Scroll, [0, 1], ["-100%", "40%"]);
  const img2X = useTransform(step4Scroll, [0, 1], ["0%", "160%"]);
  const img1Rotate = useTransform(step4Scroll, [0, 1], [0, 0]);
  const img2Rotate = useTransform(step4Scroll, [0, 1], [0, -12]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setActiveStep(idx + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto  mb-[50%]">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-white/5 z-0">
        <div className={`inner-blue-line transition-all duration-700 ease-in-out ${lineHeightMap[activeStep]}`}></div>
      </div>

      {/* STEP-1 */}

      <div
        ref={(el) => (stepsRef.current[0] = el)}
        className="flex flex-col md:flex-row items-start justify-between mb-24 relative z-10 text-white gap-6"
      >
        <div
          className="order-1 md:order-2 flex justify-center items-center w-[80px] h-[80px] md:h-[70px] rounded-full
         border border-[#2c3138] bg-gradient-to-b from-[#181929] to-[#020205]
         text-white text-[18px] shadow-[0_0_45.1px_rgba(86,86,229,0.3)] mx-auto"
        >
          01
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <div className="flex flex-col gap-[27px] rounded-[20px] py-[30px] w-full max-w-[350px] md:items-start items-center mx-auto md:mx-0">
            <div className="uppercase bg-[#3636ff] hidden md:block rounded-[8.8px] px-[13px] py-[8px] text-[14.235px] leading-[1.55] text-white shadow-[0_4.433px_8.865px_rgba(0,0,0,0.12)]">
              Ideation
            </div>
            <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1.12px] capitalize m-0">Idea Analysis</h3>
          </div>
          <p className="text-[#ffffff8a] max-w-[238px] font-normal leading-[1.47] mt-4 mx-auto md:mx-0">
            We take your ideas and analyze them thoroughly based on our experience and existing market standards.
          </p>
        </div>
        <div
          ref={step1Ref}
          className="order-3 md:order-3 w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end relative
               pb-[320px] md:pb-0"
        >
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
            alt="Glow"
            className="w-full absolute -top-20 md:left-16 left-0 z-0 opacity-100"
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6c9a706e0b3217385d044_tag%204.avif"
            alt="Tag 1"
            className="w-[160px]  absolute z-10 md:left-80 left-48 top-20 rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
            style={{ x: tag1X, y: tag1Y, rotate: 332 }}
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6c9a7b71a60f057a75d5a_tag%203.avif"
            alt="Tag 2"
            className="w-[140px]  absolute md:right-32 right-56 top-24 z-10 rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
            style={{ x: tag2X, y: tag2Y, rotate: 21 }}
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6c9a7492d6fd645d90cf9_tag%202.avif"
            alt="Tag 3"
            className="w-[150px]  absolute md:-bottom-60 bottom-8 md:left-32 left-8 z-10 rotate-[-18deg] rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6c9a77447cd58110ed2b8_tag%201.avif"
            alt="Tag 4"
            className="w-[105px]  absolute md:-bottom-64 bottom-16 right-24 md:right-8 z-10 rotate-[21deg] rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
          />
        </div>
      </div>

      {/* STEP-2 */}

      <div
        ref={(el) => (stepsRef.current[1] = el)}
        className="flex flex-col md:flex-row items-start justify-between mb-44 relative z-10 text-white gap-6"
      >
        <div
          className="order-1 md:order-2 flex justify-center items-center w-[80px] h-[80px] md:h-[70px] rounded-full
     border border-[#2c3138] bg-gradient-to-b from-[#181929] to-[#020205]
     text-white text-[18px] shadow-[0_0_45.1px_rgba(86,86,229,0.3)] mx-auto"
        >
          02
        </div>
        <div
          ref={step2Ref}
          className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start relative pb-[320px] md:pb-0"
        >
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
            alt="Glow"
            className="w-full absolute -top-20 md:left-16 left-0 z-0 opacity-100"
          />
          <div className="absolute z-30 md:top-[23%] top-1 md:left-[-7%] left-[21%] w-[230px]">
            <div className="relative ">
              <motion.img
                src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6daa5744c735ff068b073_input%20box.png"
                alt="Input Box"
                className="w-full h-24 object-fill absolute inset-0"
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="absolute top-5 -left-0 z-10 w-full flex items-center justify-center gap-2">
                <img
                  src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6a0fc18b1b753b873e667_tag.svg"
                  alt="Tag Icon"
                  className="w-[50px]"
                />
                <div className="flex items-center gap-24 h-[50px]">
                  <TextSwitcher />
                  <div className="bg-white w-[1px] h-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6e7100cf992b2952b2345_link%20bar.avif"
            alt="Tag 2"
            className="w-80 h-40 absolute  z-10 hidden md:block "
            style={{ x: tag3X, y: tag3Y, rotate: 0 }}
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd3525079b2a2e62ac95_card%201.avif"
            alt="Tag 3"
            className="md:w-[350px] w-full md:mx-auto absolute  z-10 top-28 md:left-8 md:p-0 p-10 shadow-[0_9px_20px_-2px_#00000]"
          />
        </div>
        <div className="order-3 md:order-3 w-full md:w-1/2 md:pl-10 text-center md:text-right">
          <div className="flex flex-col gap-[27px] rounded-[20px] py-[30px] w-full max-w-[350px] items-start md:items-end mx-auto md:ml-auto">
            <div className="uppercase bg-[#3636ff] hidden md:block rounded-[8.8px] px-[13px] py-[8px] text-[14.235px] leading-[1.55] text-white shadow-[0_4.433px_8.865px_rgba(0,0,0,0.12)]">
              Ideation
            </div>
            <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1.12px] capitalize m-0">Idea Analysis</h3>
            <p className="text-[#ffffff8a] max-w-[238px] font-normal leading-[1.47] mt-4">
              We take your ideas and analyze them thoroughly based on our experience and existing market standards.
            </p>
          </div>
        </div>
      </div>

      {/* STEP-3  */}

      <div
        ref={(el) => (stepsRef.current[2] = el)}
        className="flex flex-col md:flex-row items-start justify-between mb-48 relative z-10 text-white gap-6"
      >
        <div
          className="order-1 md:order-2 flex justify-center items-center w-[80px] h-[80px] md:h-[70px] rounded-full
         border border-[#2c3138] bg-gradient-to-b from-[#181929] to-[#020205]
         text-white text-[18px] shadow-[0_0_45.1px_rgba(86,86,229,0.3)] mx-auto"
        >
          03
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <div className="flex flex-col gap-[27px] rounded-[20px] py-[30px] w-full max-w-[350px] md:items-start items-center mx-auto md:mx-0">
            <div className="uppercase bg-[#3636ff] hidden md:block rounded-[8.8px] px-[13px] py-[8px] text-[14.235px] leading-[1.55] text-white shadow-[0_4.433px_8.865px_rgba(0,0,0,0.12)]">
              Ideation
            </div>
            <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1.12px] capitalize m-0">Idea Analysis</h3>
          </div>
          <p className="text-[#ffffff8a] max-w-[238px] font-normal leading-[1.47] mt-4 mx-auto md:mx-0">
            We take your ideas and analyze them thoroughly based on our experience and existing market standards.
          </p>
        </div>
        <div
          ref={step3Ref}
          className="order-3 md:order-3 w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end relative
               pb-[320px] md:pb-0"
        >
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
            alt="Glow"
            className="w-full absolute -top-20 md:left-16 left-0 z-0 opacity-100"
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd368a7f0840c7932011_icon%201.avif"
            alt="Tag 1"
            className="w-[170px] absolute z-10 md:left-44 left-36 top-0 md:-top-12 rounded-full "
            style={{ x: tag4X, y: tag4Y, rotate: 0 }}
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36ed14bc9ea8341c97_icon%202.avif"
            alt="Tag 2"
            className="w-[110px] absolute md:right-32 right-11 md:block hidden top-32 md:top-20 z-10 rounded-full "
            style={{ x: tag5X, y: tag5Y, rotate: 17 }}
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b73326861ecd43aa1089d3_tag%203.avif"
            alt="Tag 3"
            className="w-[49px] absolute md:-bottom-60 bottom-8 md:left-32 left-20 z-10 rotate-[-360deg] rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd354eb81fe4d982b5df_video%20editing%20canvas.avif"
            alt="Tag 4"
            className="w-[428px] absolute md:-bottom-96 bottom-16 right-24 md:-right-16 z-10 hidden md:block "
          />
        </div>
      </div>

      {/* STEP-4  */}

      <div
        ref={(el) => (stepsRef.current[3] = el)}
        className="flex flex-col md:flex-row items-start justify-between mb-16 relative z-10 text-white gap-6"
      >
        <div
          className="order-1 md:order-2 flex justify-center items-center w-[80px] h-[80px] md:h-[70px] rounded-full
    border border-[#2c3138] bg-gradient-to-b from-[#181929] to-[#020205]
    text-white text-[18px] shadow-[0_0_45.1px_rgba(86,86,229,0.3)] mx-auto"
        >
          04
        </div>

        <div
          ref={step4Ref}
          className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start relative "
        >
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
            alt="Glow"
            className="w-full absolute -top-44 md:left-8 left-0 z-0 opacity-100"
          />

          <div ref={containerRef} className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl ">
            <motion.img
              src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67debd0be7a053c01e6bb522_Iman%20gadzhi.avif"
              alt="Iman"
              className="absolute top-0 left-0 object-cover w-[445px] h-60 z-10"
              style={{ x: img1X, rotate: img1Rotate }}
            />

            <motion.img
              src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67debd0bb9bcdeb6007467cb_Ali%20abdaal%202.avif"
              alt="Ali"
              className="absolute top-0 left-0 w-[445px] h-60 object-cover z-20"
              style={{ x: img2X, rotate: img2Rotate }}
            />

            <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-l from-transparent to-black/80 rounded-md z-30 pointer-events-none" />

            <div className="absolute rounded-md right-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent to-black/80 z-30 pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/60 z-20 pointer-events-none" />
          </div>

          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b707fc23c7175ae432a4ca_Thumbnail%20icon.avif"
            alt="Thumbnail"
            className="w-32 h-32 absolute z-10 hidden md:block"
            style={{ x: tag8X, y: tag8Y, rotate: 12 }}
          />
        </div>

        <div className="order-3 md:order-3 w-full md:w-1/2 md:pl-28 text-center md:text-left">
          <div className="flex flex-col gap-[27px] rounded-[20px] py-[30px] w-full max-w-[350px] items-center md:items-start mx-auto md:ml-auto">
            <div className="uppercase bg-[#3636ff] rounded-[8.8px] px-[13px] py-[8px] text-[14.235px] leading-[1.55] text-white shadow-[0_4.433px_8.865px_rgba(0,0,0,0.12)] text-center md:text-left">
              Ideation
            </div>
            <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1.12px] capitalize m-0 text-center md:text-left">
              Idea Analysis
            </h3>
            <p className="text-[#ffffff8a] max-w-[238px] font-normal leading-[1.47] mt-4 text-center md:text-left">
              We take your ideas and analyze them thoroughly based on our experience and existing market standards.
            </p>
          </div>
        </div>
      </div>

      {/* STEP-5  */}

      <div ref={ref} className="flex flex-col md:flex-row items-start justify-between mb-24 relative z-10 text-white gap-6">
        <div
          className="order-1 md:order-2 flex justify-center items-center w-[80px] h-[80px] md:h-[70px] rounded-full
      border border-[#2c3138] bg-gradient-to-b from-[#181929] to-[#020205]
      text-white text-[18px] shadow-[0_0_45.1px_rgba(86,86,229,0.3)] mx-auto"
        >
          05
        </div>

        <div className="order-2 md:order-3 w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end relative pb-[320px] md:pb-0">
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b5dd36b3452df31baf9345_Glow.avif"
            alt="Glow"
            className="w-full absolute -top-20 md:left-16 left-0 z-0 opacity-100"
          />

          {inView && (
            <div className="absolute bottom-10 left-6 md:-bottom-28 md:left-24 w-40 h-32 z-0 rotate-12 pointer-events-none">
              <Lottie animationData={animationData} loop={false} />
            </div>
          )}

          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6fea4de667cb6f255f2a2_view%20icon.avif"
            alt="Tag 3"
            className="w-[260px] md:w-[400px] absolute md:-bottom-80 bottom-6 md:left-32 left-4 z-10 rounded-full"
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6fddc63aa60dafdeff726_you%20tube%20icon-1.avif"
            alt="Tag 4"
            className="w-[70px] md:w-[90px] absolute md:-bottom-[254px] bottom-10 right-24 md:right-52 rounded-full shadow-[0_9px_20px_-2px_#366cff91]"
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b731d891c16c44b9310086_Group%201618874258.avif"
            alt="Tag 4"
            className="w-[90px] md:w-[120px] absolute hidden md:block md:bottom-[-16px] md:right-48 rounded-full"
          />
          <img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/67b6fe2b0c2c7cfd9f95e99a_you%20tube%20icon.avif"
            alt="Tag 4"
            className="w-[100px] md:w-[150px] absolute bottom-36 md:-bottom-20 right-28 md:-right-24 rounded-full"
          />
        </div>

        <div className="order-3 md:order-1 w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <div className="flex flex-col gap-[27px] rounded-[20px] py-[30px] w-full max-w-[350px] items-center md:items-start mx-auto md:mx-0">
            <div className="uppercase bg-[#3636ff] hidden md:block rounded-[8.8px] px-[13px] py-[8px] text-[14.235px] leading-[1.55] text-white shadow-[0_4.433px_8.865px_rgba(0,0,0,0.12)]">
              Ideation
            </div>
            <h3 className="text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-1.12px] capitalize m-0">Idea Analysis</h3>
          </div>
          <p className="text-[#ffffff8a] max-w-[238px] font-normal leading-[1.47] mt-4 mx-auto md:mx-0">
            We take your ideas and analyze them thoroughly based on our experience and existing market standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default YouLeadsTimeline;
