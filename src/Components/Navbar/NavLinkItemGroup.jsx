import React from "react";
import NavLinkItem from "./NavLinkItem";

const NavLinkItemGroup = () => (
  <ul className="flex flex-col space-x-0 sm:flex-row sm:space-x-4 list-none">
    <NavLinkItem name="Home" href="/" />
    <NavLinkItem
      name="Services"
      href="/services"
      dropdownItems={[
        { name: "AI Development", href: "/services/ai-development" },
        { name: "ChatGPT Integrations", href: "/services/chatgpt-integrations" },
        { name: "Data Engineering", href: "/services/data-engineering" },
        { name: "Software Development", href: "/services/software-development" },
        { name: "Cloud Computing", href: "/services/cloud-computing" },
        { name: "DevOps", href: "/services/devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Internet of Things (IoT)", href: "/services/iot" },
      ]}
    />
    <NavLinkItem
      name="Industries"
      href="/industries"
      dropdownItems={[
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Finance", href: "/industries/finance" },
        { name: "Retail", href: "/industries/retail" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Education", href: "/industries/education" },
        { name: "Supply Chain", href: "/industries/supply-chain" },
        { name: "Telecommunications", href: "/industries/telecommunications" },
        { name: "Energy", href: "/industries/energy" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Legal", href: "/industries/legal" },
        { name: "Entertainment & Media", href: "/industries/entertainment-and-media" },
        { name: "Government & Public Sector", href: "/industries/government-and-public-sector" },
      ]}
    />
    <NavLinkItem name="Testimonials" href="/testimonials" />
    <NavLinkItem name="About Us" href="/aboutUs" />
  </ul>
);

export default NavLinkItemGroup;
