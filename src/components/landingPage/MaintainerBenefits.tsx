"use client" ;
import React from 'react'
import { Poppins } from "next/font/google";
import { motion } from "framer-motion"
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
function MaintainerBenefits() {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className={`text-center ${poppins.className}`}>
      <div className={`text-3xl mt-24 font-semibold`}>Maintainers</div>

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
            Get issues solved faster
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Bounty your issues and attract skilled contributors who are
            motivated to deliver high-quality work quickly.
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
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            No upfront risk
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Only pay after you review and approve the submitted work. Stay in
            control of quality and budget.
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
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
          </span>

          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Link issues, track progress, pay contributors
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            {" "}
            Link your paid issues directly on CommitPay. Contributors find them,
            open a PR on GitHub, and you approve and pay — all with full control
            and zero hassle.
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
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
          </span>
          <h2 className="mt-2 font-semibold text-base sm:text-lg text-white">
            Scale with community help
          </h2>
          <p className="sm:mt-1 block text-sm sm:text-base text-gray-300">
            Empower contributors to solve real problems in your codebase, while
            focusing on high-level architecture and planning.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default MaintainerBenefits