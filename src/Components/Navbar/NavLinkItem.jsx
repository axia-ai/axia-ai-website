import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const NavLinkItem = ({ name, href, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    console.log("Mouse Enter");
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      console.log("Mouse Leave");
      setIsDropdownOpen(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <li 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <NavLink
        to={href}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-bold font-inter" : "text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-inter"
        }
      >
        {name}
      </NavLink>
      {dropdownItems && isDropdownOpen && (
        <DropdownMenu dropdownItems={dropdownItems} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      )}
    </li>
  );
};

export default NavLinkItem;
