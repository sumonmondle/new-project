"use client";

import React, { useState } from "react";

function WorkWithUs() {
  const [enrollOpen, setEnrollOpen] = useState(false); // control form visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        alert("Enrollment submitted successfully!");
        setFormData({ name: "", email: "", phone: "", organization: "", message: "" });
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (

    <div className="relative w-full flex flex-col items-center justify-start overflow-hidden border border-neutral-800 rounded-2xl bg-[radial-gradient(circle_farthest-corner_at_50%_100%,#1f1f1f,#ffffff03_40%,transparent)]  max-w-[1000px] mx-auto ">
      {/* Background */}
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#090909] via-[#090909e6] to-transparent"></div>
        <div className="absolute w-48 h-48 rounded-full bg-[#ff00ff] opacity-90 blur-3xl z-0 transform translate-x-[-80px] translate-y-[-30px]" />
        <img
          src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679651def5e214bba9495e68_Hero%20Glow%20BG.webp"
          alt="Glow BG"
          className="z-0 object-cover w-full h-full opacity-30"
          loading="lazy"
        />
      </div>

      {/* Container */}
      <div className="relative z-20 w-full max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 lg:pt-20  pb-5 text-center">
        <div className="flex flex-col items-center max-w-2xl gap-4 font-syne">
          <div className="px-4 py-1 text-xs tracking-widest text-white uppercase bg-gray-800 rounded-full">
            Work with us
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            <span className="text-gray-400">Let’s level up<br /></span>
            Your Business!
          </h2>
        </div>

        {/* Form Section */}
        <div className="w-full ">
          {enrollOpen ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 p-6 text-left text-white bg-black border border-gray-700 bg-opacity-20 rounded-xl md:grid-cols-2"
            >
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="p-3 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Organization / Company</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="p-3 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="mb-1 text-sm">Message / Project Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="p-3 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <div className="text-right md:col-span-2">
                <button
                  type="submit"
                  className="px-6 py-3 font-medium text-black transition bg-white rounded-lg hover:bg-gray-200"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="h-[400px] font-syne flex items-center justify-center text-white text-lg bg-black bg-opacity-20 border border-gray-700 rounded-xl">
              <p>Enrollment is currently closed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  
  );
}

export default WorkWithUs;