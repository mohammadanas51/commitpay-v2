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
    <motion.div
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      className={`flex justify-center items-center mt-8 ${poppins.className} font-semibold text-2xl `}
    >
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-50%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-base font-medium text-white backdrop-blur-3xl">
          Join Now
        </span>
      </button>
    </motion.div>
  );
}

export default CtaButtons;
