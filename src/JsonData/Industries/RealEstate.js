// data/industryCards.js
import { SiGoogleadsense } from "react-icons/si";
import { FaHouseUser } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { IoIosAnalytics } from "react-icons/io";
import { RiHomeWifiFill } from "react-icons/ri";
import { HiHomeModern } from "react-icons/hi2";

export const RealEstateCards = [
  {
    title: "Property Valuation",
    description: "AI-powered algorithms can analyze property data, including recent sales, market trends, and property features, to provide accurate and up-to-date property valuations. This can help buyers, sellers, and investors make informed decisions and negotiate fair prices.",
    icon: HiHomeModern,
    linkAddress: ""
  },
  {
    title: "Lead Generation",
    description: "AI can identify potential leads based on customer behavior, demographics, and preferences. By analyzing data from various sources, AI can help real estate agents target the right customers and increase their chances of closing deals.",
    icon: SiGoogleadsense,
    linkAddress: ""
  },
  {
    title: "Personalized Recommendations",
    description: "AI can analyze customer preferences and needs to recommend suitable properties, improving the customer experience and increasing the likelihood of sales. By understanding customer preferences, AI can match buyers with properties that meet their specific requirements.",
    icon: FaHouseUser,
    linkAddress: ""
  },
  {
    title: "Virtual Tours",
    description: "AI-powered virtual tours can provide immersive experiences for potential buyers, allowing them to explore properties from the comfort of their own homes. This can save time and effort for both buyers and sellers, and increase the likelihood of making informed decisions.",
    icon: FaLaptopHouse,
    linkAddress: ""
  },
  {
    title: "Predictive Analytics",
    description: "AI can analyze market data to predict future trends, such as changes in property values, interest rates, and demand. This information can help real estate professionals anticipate market shifts and make informed investment decisions.",
    icon: IoIosAnalytics,
    linkAddress: ""
  },
  {
    title: "Smart Home Integration",
    description: "AI can enable smart home features, such as automated lighting, temperature control, and security systems. This can make properties more attractive to buyers and increase their value. By offering smart home features, real estate agents can differentiate their properties and appeal to a wider range of buyers.",
    icon: RiHomeWifiFill,
    linkAddress: ""
  },
];
