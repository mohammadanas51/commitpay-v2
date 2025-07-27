"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
function ContributorBenefits() {
  return (
    <div className={` ${poppins.className} `}>
      <div className={`text-3xl text-center mt-24 font-semibold`}>
        Contributors
      </div>
      <ul className="mt-2 list-disc list-inside space-y-2 font-body text-center">
        <li>Get Paid for Open Source.</li>
        <li> Learn by Doing</li>
        <li> Collaborate with Maintainers</li>
      </ul>
    </div>
  );
}

export default ContributorBenefits;
