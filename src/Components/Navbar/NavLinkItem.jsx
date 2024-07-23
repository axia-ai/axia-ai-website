import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ name, href }) => (
  <li>
    <NavLink to={href} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-primary text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-bold font-inter" : "text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-inter"
      }>
      {name}
    </NavLink>
  </li>
);

export default NavLinkItem;
