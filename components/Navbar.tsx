'use client'
import { useState, useEffect } from 'react';  // Import useEffect hook for side-effect
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);  // State to manage menu open/close

  useEffect(() => {
    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target && !(event.target as Element).closest('.navbar-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full flex justify-between items-center py-5 px-10 absolute top-0 left-0 z-10">
      <h1 className="text-2xl text-white">Watamu Hotel</h1>

      {/* Menu button for small screens */}
      <button
        className="text-white sm:hidden md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        {/* Menu icon (Hamburger) */}
        <svg
          className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation links dropdown */}
      <div className={`navbar-menu sm:relative md:relative ${isOpen ? 'block' : 'hidden'}`}>
        <ul id="navbar-menu" className="sm:flex md:flex flex-col sm:flex-row md:flex-row space-y-2 sm:space-y-0 md:space-y-0 sm:space-x-4 md:space-x-4 absolute top-0 sm:top-0 left-0 w-full bg-white p-4 rounded shadow-md">
          {NavLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.key}>
                <Link href={link.href} onClick={closeMenu} className={`block ${isActive ? 'font-bold text-nav-100' : 'text-gray-900 font-semibold'} py-2 px-4 hover:text-nav-100`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
