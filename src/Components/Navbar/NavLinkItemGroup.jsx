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
        { name: "Industries 1", href: "/industries/industries1" },
        { name: "Industries 2", href: "/industries/industries2" },
        { name: "Industries 3", href: "/industries/industries3" },
      ]}
    />
    <NavLinkItem name="Testimonials" href="/testimonials" />
    <NavLinkItem name="About Us" href="/aboutUs" />
  </ul>
);

export default NavLinkItemGroup;
