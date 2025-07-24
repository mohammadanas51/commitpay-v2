import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});
function Header() {
  return (
    <div>
      <div className="text-center mt-10 text-5xl">
        <h1 className={poppins.className}>
          CommitPay - Find your first paid Open Source Issue
        </h1>
        <p></p>
      </div>
    </div>
  );
}

export default Header;
