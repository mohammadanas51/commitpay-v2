import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400","600"],
  subsets: ["latin"],
});

function Header() {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className={`text-5xl ${poppins.className} font-semibold`}>
          CommitPay - Find your first paid Open Source Issue
        </h1>
        <h2 className={`mt-7 text-2xl ${poppins.className} font-normal`}>
          First Open Source Contribution? Make It Count (and Make Some Money).
        </h2>
      </div>
    </div>
  );
}

export default Header;
