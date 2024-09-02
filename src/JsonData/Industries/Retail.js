// data/industryCards.js
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaUserSecret } from "react-icons/fa6";
import { TbDeviceAnalytics } from "react-icons/tb";

export const RetailCards = [
  {
    title: "Personalized Recommendations",
    description: "AI-powered recommendation engines can analyze customer data, including purchase history, browsing behavior, and demographics, to offer highly personalized product suggestions. This can increase customer engagement, drive sales, and foster loyalty.",
    icon: FaShoppingCart,
    linkAddress: ""
  },
  {
    title: "Inventory Management",
    description: "AI can optimize inventory management by predicting demand, preventing stockouts, and reducing excess costs. By analyzing historical sales data, market trends, and other factors, AI can help retailers maintain optimal inventory levels and avoid lost sales or excessive carrying costs.",
    icon: MdOutlineInventory,
    linkAddress: ""
  },
  {
    title: "Customer Service Automation",
    description: "AI-powered chatbots and virtual assistants can provide 24/7 customer support, answer questions, and assist with purchases, improving customer satisfaction and reducing the burden on human customer service agents and operational costs.",
    icon: RiCustomerService2Fill,
    linkAddress: ""
  },
  {
    title: "Visual Search",
    description: "AI-powered visual search allows customers to upload an image of a product they like and find similar products in the retailer's catalog. This can enhance the shopping experience and increase conversion rates.",
    icon: LuMonitorSmartphone,
    linkAddress: ""
  },
  {
    title: "Fraud Prevention",
    description: "AI can detect fraudulent activities, such as credit card fraud and account hijacking, by analyzing customer behavior, transaction patterns, and other data. This helps protect retailers and customers from losses.",
    icon: FaUserSecret,
    linkAddress: ""
  },
  {
    title: "Demand Forecasting",
    description: "AI can analyze sales data, market trends, and external factors to predict future demand for products. This enables retailers to optimize inventory levels, pricing strategies, and resource allocation.",
    icon: TbDeviceAnalytics,
    linkAddress: ""
  },
];
