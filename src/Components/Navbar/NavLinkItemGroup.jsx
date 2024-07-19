import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinkItemGroup = () => (
    <>
        <NavLinkItem name="Home" to="home" />
        <NavLinkItem name="Service" to="service" />
        <NavLinkItem name="About Us" to="aboutUs" />
        <NavLinkItem name="Industries" to="industries" />
        <NavLinkItem name="Contact Us" to="contactUs" />
    </>
);

export default NavLinkItemGroup;
