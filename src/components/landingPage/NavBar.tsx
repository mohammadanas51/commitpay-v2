"use client";
import React from 'react'
import { motion } from "framer-motion"


function NavBar() {
  return (
    <div className='flex justify-center items-center mt-3.5 bg-blue-800 h-16'>
        <ul className='flex justify-center gap-7 cursor-pointer'>
            <li>Home</li>
            <li>How it works</li>
            <li>Contributors</li>
            <li>Maintainers</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar