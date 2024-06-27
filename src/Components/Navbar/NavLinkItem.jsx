import React from 'react';

const NavLinkItem = ({ name, to }) => (
  <>
    <a to={to} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium font-inter">
      {name}
    </a>
  </>
);

export default NavLinkItem;
