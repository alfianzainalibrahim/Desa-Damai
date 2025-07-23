// src/components/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo & Text */}
        <div className="flex items-center space-x-4">
          <img
            src="/Official_Logo_of_Sidenreng_Rappang_Regency.png"
            alt="Logo Desa Damai"
            className="h-[60px] w-auto"
          />
          <div className="text-white text-[11px] sm:text-sm font-semibold leading-tight">
            Desa Damai, Kec. Watang <br />
            Sidenreng, Kab. Sidenreng <br />
            Rappang
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className={`sm:flex space-x-4 text-white font-medium hidden`}>
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-green-300 transition duration-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden px-4 pb-4 text-white font-medium space-y-2 bg-green-900">
          {menuItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="block hover:text-green-300 transition duration-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const menuItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Location', href: '#location' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Government', href: '#government' },
  { label: 'Services', href: '#government-services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
  { label: 'KKNT114', href: '#kknt114' },
];
