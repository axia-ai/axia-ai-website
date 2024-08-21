// src/components/Navbar.jsx
import React, { useState } from 'react';
import NavLinkItemGroup from './NavLinkItemGroup';
import CompanyLogo from '../ReusableComponents/CompanyLogo';
import ContactButtton from '../ReusableComponents/ContactButtton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mr-10 sm:mr-0">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <a href="/">
                  <CompanyLogo/>
                </a>
                <a href="/">
                  <span className="text-xl font-kanit font-bold text-black">Axia</span>
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:m-auto">
              <div className="flex space-x-4">
                <NavLinkItemGroup />
              </div>
            </div>
          </div>
          <ContactButtton/>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinkItemGroup />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
