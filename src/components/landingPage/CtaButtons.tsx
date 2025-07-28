"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function CtaButtons() {
  return (
    
    <div className={`flex justify-center items-center mt-8 ${poppins.className} font-semibold text-2xl`} >
      <a
        href="#cta"
        className="relative inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
      >
        <span className="relative z-10">Join Now - It's Free</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}

export default CtaButtons;
