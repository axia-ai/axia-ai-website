import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinkItemGroup = () => (
    <>
        <NavLinkItem name="Home" to="home" />
        <NavLinkItem name="Service" to="service" />
        <NavLinkItem name="Feature" to="feature" />
        <NavLinkItem name="Product" to="product" />
        <NavLinkItem name="Testimonial" to="testimonial" />
        <NavLinkItem name="FAQ" to="faq" />
    </>
);

export default NavLinkItemGroup;
