// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-900 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo + Text */}
        <div className="flex items-center space-x-4">
          <img
            src="/Official_Logo_of_Sidenreng_Rappang_Regency.png"
            alt="Logo Desa Damai"
            className="h-[75px] w-auto"
          />
          <div className="text-white text-sm md:text-base font-semibold leading-tight">
            Desa Damai, Kec. Watang <br className="hidden sm:block" />
            Sidenreng, Kab. Sidenreng <br className="hidden sm:block" />
            Rappang
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-4">
          <li>
            <a href="#profile" className="text-white hover:text-green-300 transition duration-300">
              Profile
            </a>
          </li>
          <li>
            <a href="#location" className="text-white hover:text-green-300 transition duration-300">
              Location
            </a>
          </li>
          <li>
            <a href="#government" className="text-white hover:text-green-300 transition duration-300">
              Government
            </a>
          </li>
          <li>
            <a href="#news" className="text-white hover:text-green-300 transition duration-300">
              News
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-green-300 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-green-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
