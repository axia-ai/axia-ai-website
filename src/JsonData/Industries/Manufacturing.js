// data/industryCards.js
import { IoMdSettings } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { TbTableOptions } from "react-icons/tb";
import { RiRobot3Fill } from "react-icons/ri";
import { GiChaingun } from "react-icons/gi";
import { SlPencil } from "react-icons/sl";

export const ManufacturingCards = [
  {
    title: "Predictive Maintenance",
    description: "AI-powered predictive maintenance can analyze sensor data to predict equipment failures before they occur, reducing downtime and maintenance costs. By identifying potential issues in advance, manufacturers can schedule maintenance proactively, preventing unexpected breakdowns and minimizing disruptions.",
    icon: IoMdSettings,
    linkAddress: ""
  },
  {
    title: "Quality Control",
    description: "AI-powered vision systems can inspect products for defects with exceptional precision, identifying even subtle flaws that may be difficult for human inspectors to detect. This significantly improves product quality and reduces waste by preventing defective products from reaching consumers.",
    icon: FaCheck,
    linkAddress: ""
  },
  {
    title: "Process Optimization",
    description: "AI can analyze manufacturing processes to identify inefficiencies and optimize workflows. By identifying bottlenecks and areas for improvement, manufacturers can increase productivity, reduce costs, and improve overall efficiency. This can lead to increased profitability and a competitive advantage in the market.",
    icon: TbTableOptions,
    linkAddress: ""
  },
  {
    title: "Robotics and Automation",
    description: "AI-powered robots can automate tasks, such as assembly, packaging, and material handling, improving safety, efficiency, and productivity in manufacturing environments. This can lead to reduced costs, increased output, and a safer workplace for human workers.",
    icon: RiRobot3Fill,
    linkAddress: ""
  },
  {
    title: "Supply Chain Management",
    description: "AI can optimize supply chains by predicting demand, managing inventory levels, and improving logistics. This can help manufacturers avoid stockouts, reduce costs, and ensure timely delivery of products, ultimately improving customer satisfaction and overall business efficiency.",
    icon: GiChaingun,
    linkAddress: ""
  },
  {
    title: "Product Design and Development",
    description: "AI can assist in product design and development by generating new ideas, simulating product performance, and optimizing product features. This can help manufacturers create innovative and competitive products that meet customer needs.",
    icon: SlPencil,
    linkAddress: ""
  },
];
