import AboutUsSlider from "@/components/AboutUsSlider/AboutUsSlider";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import DoDifferently from "@/components/DoDifferently/DoDifferently";

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

import ScrollAnimationSection from "@/components/ScrollAnimationSection/ScrollAnimationSection";
import WeDo from "@/components/WeDo/WeDo";
import WorkProjectSection from "@/components/WorkProjectSection/WorkProjectSection";
import YouLeadsTimeline from "@/components/YouLeadsTimeline/YouLeadsTimeline";

import React from "react";

function page() {
  return (
    <div className="bg-black">
      <Navbar id="#" />
      <HeroSection></HeroSection>
      <ScrollAnimationSection></ScrollAnimationSection>

      <AnimatedSection id="testimonial">
        <AboutUsSlider></AboutUsSlider>{" "}
      </AnimatedSection>
      <AnimatedSection id="work">
        {" "}
        <WorkProjectSection></WorkProjectSection>{" "}
      </AnimatedSection>
      <AnimatedSection id="case-study">
        {" "}
        <CaseStudies></CaseStudies>{" "}
      </AnimatedSection>
      <DoDifferently></DoDifferently>
      {/* <YouLeadsTimeline></YouLeadsTimeline> */}
      <AnimatedSection>
        <div id="Process">
          <YouLeadsTimeline />
        </div>
      </AnimatedSection>
      <WeDo></WeDo>

    </div>
  );
}

export default page;
