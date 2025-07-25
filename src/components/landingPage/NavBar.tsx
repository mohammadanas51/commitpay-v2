"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // You can use any icon library

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "How it works", "Contributors", "Maintainers", "Pricing", "Contact"];

  return (
    <nav className="bg-blue-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">CommitPay</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden flex flex-col gap-4 mt-4 bg-blue-700 p-4 rounded-lg"
        >
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

export default NavBar;
