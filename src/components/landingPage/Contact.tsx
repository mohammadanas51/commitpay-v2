"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
     
      transition={{ duration: 0.8 }}
      className={`text-center py-16 px-4 ${poppins.className}`}
    >
      <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
      <p className="text-gray-300 text-lg">
        Drop us an email at{" "}
        <a
          href="mailto:commitpay.team@gmail.com"
          className="text-blue-400 hover:underline"
        >
          commitpay.team@gmail.com
        </a>
      </p>
    </motion.div>
  );
}

export default Contact;
