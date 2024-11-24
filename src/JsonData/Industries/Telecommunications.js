// data/industryCards.js
import { GoDatabase } from "react-icons/go";
import { MdNetworkCheck } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

export const TelecommunicationsCards = [
  {
    title: "Network Optimization",
    description: "AI can analyze network data, such as traffic patterns, usage statistics, and performance metrics, to identify bottlenecks and optimize resource allocation. This can lead to faster speeds, reduced latency, and improved overall network performance.",
    icon: MdNetworkCheck,
    linkAddress: ""
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered predictive maintenance can analyze network data to predict equipment failures and network outages, allowing for proactive maintenance and reducing downtime. This can significantly improve network reliability and prevent disruptions to critical services.",
    icon: IoIosSettings,
    linkAddress: ""
  },
  {
    title: "Fraud Detection",
    description: "AI-powered algorithms can detect fraudulent activity, such as SIM card fraud, call spoofing, and unauthorized access, protecting customers and networks from financial losses and security breaches. This helps maintain the integrity of telecommunications systems.",
    icon: FaUserSecret,
    linkAddress: ""
  },
  {
    title: "Customer Service Automation",
    description: "AI-powered chatbots and virtual assistants can provide 24/7 customer support, answer questions, and resolve issues efficiently. This can improve customer satisfaction and reduce the burden on human customer service agents.",
    icon: RiCustomerService2Fill,
    linkAddress: ""
  },
  {
    title: "Personalized Recommendations",
    description: "AI can analyze customer data to offer personalized recommendations for products and services, improving customer engagement, satifaction and loyalty and lead the telecommunications companies to grow.",
    icon: BsPersonBoundingBox,
    linkAddress: ""
  },
  {
    title: "Network Security",
    description: "AI can detect and prevent security threats, such as cyberattacks and data breaches, protecting networks and customer information. AI security solutions can monitor network traffic, identify anomalies, and respond to threats in real-time.",
    icon: MdOutlineSecurity,
    linkAddress: ""
  },
];
