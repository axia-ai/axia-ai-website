// data/industryCards.js
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { SiGooglecontaineroptimizedos } from "react-icons/si";

export const FirstDeck = [
  {
    title: "Data Analytics and Insights",
    description: "We leverage AI to analyze vast amounts of IoT data, extracting valuable insights and identifying trends that can inform decision-making and optimize operations, ultimately driving business growth, innovation, and competitive advantage.",
    icon: BsDatabase,
    linkAddress: ""
  },
  {
    title: "Predictive Maintenance",
    description: "We utilize AI algorithms to predict equipment failures and schedule maintenance proactively, reducing downtime and costs. AI can analyze sensor data, historical records, and other factors to identify potential issues beforehand.",
    icon: MdOutlineMiscellaneousServices,
    linkAddress: ""
  },
  {
    title: "Intelligent Automation",
    description: "We automate tasks and processes using AI to improve efficiency, reduce manual errors, and optimize resource allocation. AI-powered automation can streamline operations, freeing up resources for more strategic initiatives.",
    icon: TbSettingsAutomation,
    linkAddress: ""
  },
  {
    title: "Personalized Experiences",
    description: "We tailor IoT experiences to individual users based on their preferences and behavior. AI can analyze user data to provide personalized recommendations, notifications, and content, enhancing user satisfaction and engagement.",
    icon: FaPerson,
    linkAddress: ""
  },
  {
    title: "Security and Anomaly Detection",
    description: "Implement AI-powered security solutions to detect and prevent security threats in IoT networks. AI can analyze network traffic, sensor data, and user behavior to identify anomalies and respond to potential attacks.",
    icon: MdOutlineSecurity,
    linkAddress: ""
  },
  {
    title: "Optimization and Efficiency",
    description: "Use AI to optimize IoT systems for energy efficiency, resource allocation, and performance. AI can analyze data to identify areas for improvement and optimize resource utilization, reducing costs and improving sustainability.",
    icon: SiGooglecontaineroptimizedos,
    linkAddress: ""
  }
];
