// data/industryCards.js
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineInventory } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

export const SupplyChainCards = [
  {
    title: "Demand Forecasting",
    description: "AI-powered demand forecasting models can analyze historical sales data, market trends, and external factors to accurately predict future demand for products. This enables businesses to optimize inventory levels, production schedules, and resource allocation, avoiding stockouts and reducing costs.",
    icon: TbDeviceAnalytics,
    linkAddress: ""
  },
  {
    title: "Inventory Management",
    description: "AI can optimize inventory management by identifying optimal stock levels, preventing stockouts, and reducing excess inventory costs. By analyzing factors such as lead times, demand variability, and carrying costs, AI can help businesses maintain the right amount of inventory to meet customer demands.",
    icon: MdOutlineInventory,
    linkAddress: ""
  },
  {
    title: "Transportation Optimization",
    description: "AI can optimize transportation routes, reduce shipping costs, and improve delivery times by analyzing factors such as traffic conditions, weather, and demand patterns. This can help businesses streamline their logistics operations and enhance customer satisfaction through faster and more reliable deliveries.",
    icon: FaTruck,
    linkAddress: ""
  },
  {
    title: "Risk Management",
    description: "AI can identify potential risks in the supply chain, such as disruptions due to natural disasters, geopolitical events, or supplier failures. By analyzing potential vulnerabilities, businesses can develop contingency plans and mitigate risks.",
    icon: BsAsterisk,
    linkAddress: ""
  },
  {
    title: "Quality Control",
    description: "AI-powered quality control systems can detect defects and inconsistencies in products, ensuring that only high-quality products reach customers. This can help improve brand reputation, reduce returns, and enhance customer satisfaction.",
    icon: FaCheck,
    linkAddress: ""
  },
  {
    title: "Supplier Relationship Management",
    description: "AI can analyze supplier performance data to identify underperforming suppliers and negotiate better terms. This can help businesses build stronger relationships with their suppliers, improve supply chain efficiency, and reduce costs.",
    icon: MdManageAccounts,
    linkAddress: ""
  },
];
