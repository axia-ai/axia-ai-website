import React from 'react';

const NavLinkItem = ({ name, href }) => (
  <li>
    <a href={href} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-inter">
      {name}
    </a>
  </li>
);

export default NavLinkItem;
