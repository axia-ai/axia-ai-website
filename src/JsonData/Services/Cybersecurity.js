// data/industryCards.js
import { GoDatabase } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { BsHddNetwork } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";

export const FirstDeck = [
  {
    title: "Threat Detection and Response",
    description: "We create AI-powered security tools that can analyze vast amounts of data to detect anomalies and potential threats in real-time. This enables faster response times, reduced damage, and improved security posture, ultimately safeguarding your organization from cyberattacks.",
    icon: GrShieldSecurity,
    linkAddress: ""
  },
  {
    title: "Phishing Detection",
    description: "We develop AI algorithms that can analyze email content, sender behavior, and other indicators to identify phishing attempts. This helps protect users from falling victim to malicious emails that attempt to trick them into clicking on malicious links or downloading malware.",
    icon: AiOutlineSecurityScan,
    linkAddress: ""
  },
  {
    title: "Network Security",
    description: "We impelement AI-powered network security solutions can monitor network traffic for suspicious activity, detect intrusions, and automatically respond to threats. This helps protect organizations from unauthorized access and data breaches.",
    icon: IoIosGitNetwork,
    linkAddress: ""
  },
  {
    title: "Endpoint Security",
    description: "We work on AI-powered endpoint protection solutions that can detect and prevent malware, ransomware, and other threats on devices like laptops and smartphones. This helps safeguard sensitive data and prevent unauthorized access.",
    icon: BsHddNetwork,
    linkAddress: ""
  },
  {
    title: "Identity and Access Management",
    description: "We create AI solutions that can automate identity management processes, detect unauthorized access, and ensure compliance with security regulations. This helps protect sensitive data and prevent unauthorized access to systems and resources.",
    icon: LiaNetworkWiredSolid,
    linkAddress: ""
  },
  {
    title: "Data Privacy and Compliance",
    description: "We use AI that can assist in identifying and protecting sensitive data, ensuring compliance with regulations like GDPR and CCPA. This helps organizations avoid costly fines and penalties, maintain trust, and demonstrate a strong commitment to data privacy and security.",
    icon: GoDatabase,
    linkAddress: ""
  },
];
