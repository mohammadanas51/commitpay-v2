import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400","600"],
  subsets: ["latin"],
});
function ContributorBenefits() {
  return (
    <div className = {` ${poppins.className} `}>
        <div className={`text-3xl text-center mt-24 font-semibold`}>
            Contributors
        </div>

        <div>
            <ul className = "text-center mt-4 text-lg md:text-xl">
              <li className='mt-4'>
                Encourages beginners to contribute to Open Source
              </li>

              <li className='mt-4'>
                Contributors get paid for their Contribution
              </li>

              <li className='mt-4'>
                Beginner contributors can get their hands dirty by working on live codebases
              </li>
            </ul>
        </div>
    </div>
  )
}

export default ContributorBenefits