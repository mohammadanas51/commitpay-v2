"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
function ContributorBenefits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`text-center ${poppins.className}`}
    >
      <div className={`text-3xl mt-24 font-semibold`}>Contributors</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  p-10 ">
        <div className="block rounded-xl border border-white/10 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0
       1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659
       -1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Monetize your contributions
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Turn your open-source contributions into sustainable income. Get
            rewarded every time your code helps a project move forward.
          </p>
        </div>

        <div className="block rounded-xl border border-white/10 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Grow your developer reputation
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Showcase your contributions on a verified profile. Build trust with
            maintainers and attract more collaboration opportunities.
          </p>
        </div>

        <div className="block rounded-xl border border-white/10 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Discover paid issues{" "}
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Browse and claim bountied issues from popular open-source projects.
            No more unpaid bug fixes — earn while you build.
          </p>
        </div>

        <div className="block rounded-xl border border-white/10 p-4">
          <span className="inline-block rounded-lg p-3">
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Instant payouts, no middlemen{" "}
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            CommitPay offers secure, direct payments with clear terms. No
            haggling, no delays — just clean, trackable compensation for your
            work.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContributorBenefits;
