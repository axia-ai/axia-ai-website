// data/industryCards.js
import { PiCellTowerBold } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { PiSolarPanelFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { GiLightningTrio } from "react-icons/gi";
import { SiCyberdefenders } from "react-icons/si";

export const EnergyCards = [
  {
    title: "Smart Grid Management",
    description: "AI can optimize the operation of smart grids by analyzing data from sensors and meters, identifying inefficiencies, and balancing supply and demand. This can improve energy efficiency, reduce losses, and enhance grid stability.",
    icon: PiCellTowerBold,
    linkAddress: ""
  },
  {
    title: "Demand Forecasting",
    description: "AI can accurately predict energy demand by analyzing historical data, weather patterns, and other relevant factors. This enables grid operators to adjust power generation and distribution to meet demand, reducing the need for peak load management and improving grid stability.",
    icon: BsFillLightningChargeFill,
    linkAddress: ""
  },
  {
    title: "Renewable Energy Integration",
    description: "AI can optimize the integration of renewable energy sources, such as solar and wind power, into the grid. By analyzing weather patterns and energy demand, AI can help grid operators manage the variability of renewable energy sources and ensure a stable power supply.",
    icon: PiSolarPanelFill,
    linkAddress: ""
  },
  {
    title: "Energy Efficiency Optimization",
    description: "AI can analyze energy consumption patterns and identify opportunities for energy savings. This can help businesses and households reduce their energy costs and carbon footprint. AI-powered solutions can optimize energy usage in buildings, factories, and other facilities.",
    icon: FaLightbulb,
    linkAddress: ""
  },
  {
    title: "Fault Detection and Diagnosis",
    description: "AI can detect and diagnose faults in energy infrastructure, such as power lines and transformers. This enables timely repairs and reduces downtime, ensuring a reliable and efficient power supply.",
    icon: GiLightningTrio,
    linkAddress: ""
  },
  {
    title: "Energy Theft Detection",
    description: "AI can identify and prevent energy theft, ensuring fair billing and reducing revenue losses. AI-powered algorithms can analyze energy consumption patterns and detect anomalies that may indicate theft or unauthorized use.",
    icon: SiCyberdefenders,
    linkAddress: ""
  },
];
