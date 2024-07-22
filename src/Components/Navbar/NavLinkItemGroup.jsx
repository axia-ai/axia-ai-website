import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinkItemGroup = () => (
    <ul className='flex space-x-4 list-none'>
        <NavLinkItem name="Home" href="/" />
        <NavLinkItem name="Services" href="/services" />
        <NavLinkItem name="Industries" href="/industries" />
        <NavLinkItem name="Testimonials" href="/testimonials" />
        <NavLinkItem name="About Us" href="/aboutUs" />
        <NavLinkItem name="Contact Us" href="/contactUs" />
    </ul>
);

export default NavLinkItemGroup;
