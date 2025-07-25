"use client";
import React from "react";
import { Poppins } from "next/font/google";
import {
  ArrowDown,
  ArrowRight,
  DollarSign,
  FileCheck,
  GitBranchPlus,
} from "lucide-react";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const steps = [
  {
    icon: <GitBranchPlus className="w-8 h-8 text-blue-800" />,
    text: "Maintainers post beginner-friendly paid issues",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-green-600" />,
    text: "Contributors work on the issues and open a PR",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
    text: "If merged, the contributors get paid",
  },
];

function HowItWorks() {
  return (
    <div className={`mt-24 px-6 text-center ${poppins.className}`}>
      <p className="text-3xl font-semibold mb-10">How it works</p>

      {/* Desktop Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="hidden md:flex items-center justify-center gap-10"
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center max-w-xs">
              {step.icon}
              <p className="text-xl mt-2">{step.text}</p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-gray-500" />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              {step.icon}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-lg mt-2"
              >
                {step.text}
              </motion.p>
            </div>
            {index < steps.length - 1 && (
              <ArrowDown className="w-6 h-6 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
