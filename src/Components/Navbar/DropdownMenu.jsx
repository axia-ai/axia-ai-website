import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({
  dropdownItems,
  handleMouseLeave,
  handleMouseEnter,
}) => (
  <ul 
        className="absolute left-0 mt-1 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-300 ease-linear block">
    {dropdownItems.map((item) => (
      <li
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave} 
        key={item.name}
      >
        <NavLink
          // onMouseLeave={handleMouseLeave}
          
          to={item.href}
          className={({ isActive }) =>
            isActive
              ? "text-primary block px-3 py-2 rounded-md text-base font-bold font-inter"
              : "text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-inter"
          }
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default DropdownMenu;
