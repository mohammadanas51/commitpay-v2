"use client";

import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function CtaButtons() {
  return (
    
    <div className={`flex justify-center items-center mt-8 ${poppins.className} font-semibold text-2xl`} >
      <a
        href="https://commitpay-mvp.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
      >
        <span className="relative z-10">Join Now - It's Free</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-lg blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}

export default CtaButtons;
