// data/industryCards.js
import { GoDatabase } from "react-icons/go";
import { CiMobile1 } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaToolbox } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

export const FirstDeck = [
  {
    title: "Custom Mobile App Development",
    description: "We create mobile applications meticulously tailored to the specific needs and requirements of a client or business. Our approach ensures a seamless, high-performance app experience that aligns with the client’s goals and enhances user engagement.",
    icon: CiMobile1,
    linkAddress: ""
  },
  {
    title: "UI/UX Design",
    description: "We design an intuitive and visually appealing user interface (UI) and user experience (UX) that ensures the app is user-friendly, highly engaging, and greatly enhances overall customer satisfaction and increases associations.",
    icon: FaPaintBrush,
    linkAddress: ""
  },
  {
    title: "Backend Development & Integration",
    description: "We develop the server side of the application and integrating APIs that allow the app to communicate with external services or databases, enabling features like user authentication, data storage, and third-party services.",
    icon: CiServer,
    linkAddress: ""
  },
  {
    title: "App Testing & Quality Assurance (QA)",
    description: "We ensure the app functions smoothly across various devices and operating systems. This involves functional testing, performance testing, and bug fixing to deliver a reliable app experience.",
    icon: TbBrandSpeedtest,
    linkAddress: ""
  },
  {
    title: "App Maintenance & Support",
    description: "We provide ongoing maintenance services to keep the app updated, secure, and compatible with the latest OS versions. This can include adding new features, fixing bugs, and improving performance over time.",
    icon: FaToolbox,
    linkAddress: ""
  },
  {
    title: "App Deployment & Launch",
    description: "We manage the release of the app on platforms like the Apple App Store and Google Play Store. This includes handling app store guidelines, optimizing for discoverability, and monitoring the app's launch performance.",
    icon: IoLogoGooglePlaystore,
    linkAddress: ""
  }
];
