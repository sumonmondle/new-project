import AboutUsSlider from "@/components/AboutUsSlider/AboutUsSlider";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import DoDifferently from "@/components/DoDifferently/DoDifferently";

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

import ScrollAnimationSection from "@/components/ScrollAnimationSection/ScrollAnimationSection";
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
      <YouLeadsTimeline></YouLeadsTimeline>
      <AnimatedSection id="Process">Section 4: Process</AnimatedSection>
      <AnimatedSection id="book-a-call">Section 5: Book a Call</AnimatedSection>
    </div>
  );
}

export default page;
