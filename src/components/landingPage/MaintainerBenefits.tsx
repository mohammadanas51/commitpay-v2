import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
function MaintainerBenefits() {
  return (
     <div className={` ${poppins.className} `}>
      <div className={`text-3xl text-center mt-24 font-semibold`}>
        Maintainers
      </div>
      <ul className="mt-2 list-disc list-inside space-y-2 font-body text-center">
        <li>Get Issues Solved Faster</li>
        <li> Pay Only for Completed Work</li>
        <li>  Attract New Contributors Easily </li>
        <li> Focus on High-Level Development </li>
      </ul>
    </div>
  )
}

export default MaintainerBenefits