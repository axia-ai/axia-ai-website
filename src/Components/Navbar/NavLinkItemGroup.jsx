import React from "react";
import NavLinkItem from "./NavLinkItem";

const NavLinkItemGroup = () => (
  <ul className="flex flex-col space-x-0 sm:flex-row sm:space-x-4 list-none">
    <NavLinkItem name="Home" href="/" />
    <NavLinkItem
      name="Services"
      href="/services"
      dropdownItems={[
        { name: "Service 1", href: "/services/service1" },
        { name: "Service 2", href: "/services/service2" },
        { name: "Service 3", href: "/services/service3" },
      ]}
    />
    <NavLinkItem
      name="Industries"
      href="/industries"
      dropdownItems={[
        { name: "Industry 1", href: "/industries/industry1" },
        { name: "Industry 2", href: "/industries/industry2" },
        { name: "Industry 3", href: "/industries/industry3" },
      ]}
    />
    <NavLinkItem name="Testimonials" href="/testimonials" />
    <NavLinkItem name="About Us" href="/aboutUs" />
  </ul>
);

export default NavLinkItemGroup;
