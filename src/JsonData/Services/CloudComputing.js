// data/industryCards.js
import { GoDatabase } from "react-icons/go";
import { LiaMixcloud } from "react-icons/lia";
import { AiOutlineDatabase } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";

export const FirstDeck = [
  {
    title: "Cloud Migration and Optimization",
    description: "We assist clients in seamlessly migrating their existing applications and data to cloud platforms. Optimize cloud infrastructure for performance, cost-efficiency, and scalability, ensuring a smooth transition to the cloud.",
    icon: LiaMixcloud,
    linkAddress: ""
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    description: "We provide on-demand access to fundamental computing resources, including servers, storage, and networking. This allows businesses to scale resources up or down as needed, eliminating the need for upfront investments in hardware.",
    icon: AiOutlineDatabase,
    linkAddress: ""
  },
  {
    title: "Platform as a Service (PaaS)",
    description: "We offer a development and deployment platform for building and running applications. PaaS provides a complete environment with tools, frameworks, and services, simplifying the development and management of applications.",
    icon: GoDatabase,
    linkAddress: ""
  },
  {
    title: "Software as a Service (SaaS)",
    description: "We deliver pre-built software applications over the internet, eliminating the need for local installation and maintenance. SaaS solutions can range from productivity tools to enterprise resource planning (ERP) systems.",
    icon: CgWebsite,
    linkAddress: ""
  },
  {
    title: "Big Data Analytics",
    description: "We utilize cloud-based platforms to analyze large datasets and extract valuable insights. Our data engineers can help clients leverage big data analytics to make informed decisions and gain a competitive advantage.",
    icon: FiDatabase,
    linkAddress: ""
  },
  {
    title: "Cloud Security and Compliance",
    description: "Ensure data security, privacy, and compliance with industry regulations in cloud environments. We implement robust security measures, conduct regular audits, and provide expert guidance on data protection best practices.",
    icon: MdOutlineSecurity,
    linkAddress: ""
  }
];
