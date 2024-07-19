import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinkItemGroup = () => (
    <>
        <NavLinkItem name="Home" to="home" />
        <NavLinkItem name="Services" to="services" />
        <NavLinkItem name="Industries" to="ndustries" />
        <NavLinkItem name="Testimonials" to="testimonials" />
        <NavLinkItem name="About Us" to="aboutUs" />
        <NavLinkItem name="Contact Us" to="contactUs" />
    </>
);

export default NavLinkItemGroup;
