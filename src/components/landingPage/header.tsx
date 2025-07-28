"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function Header() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className={`text-5xl ${poppins.className} font-semibold`}>
          Turn Your First Pull Request Into a Paycheck
        </h1>

        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-7 text-lg ${poppins.className} font-normal md:text-2xl"
        >
          Discover beginner-friendly OSS issues that actually pay.
        </motion.h3>
      </div>
    </div>
  );
}

export default Header;
