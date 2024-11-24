// data/industryCards.js
import { FaMicroscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { SiCyberdefenders } from "react-icons/si";

export const HealthCareCards = [
  {
    title: "Improved Diagnosis",
    description: "AI algorithms can analyze medical images, such as X-rays and MRIs, to assist healthcare professionals in making accurate and timely diagnoses. This can lead to earlier detection of diseases and more effective treatment plans.",
    icon: FaMicroscope,
    linkAddress: ""
  },
  {
    title: "Personalized Treatment Plans",
    description: "AI can analyze patient data, including medical history, genetics, and lifestyle factors to develop personalized treatment plans. This can improve patient outcomes, reduce the risk of adverse side effects, and enhance overall healthcare experiences.",
    icon: FaUserDoctor,
    linkAddress: ""
  },
  {
    title: "Accelerated Drug Discovery",
    description: "AI can speed up the process of discovering new drugs by analyzing vast amounts of data to identify potential drug targets and optimize drug design which can lead to new treatments for diseases that currently lack effective options.",
    icon: GiMedicines,
    linkAddress: ""
  },
  {
    title: "Administrative Efficiency",
    description: "AI can automate administrative tasks, such as scheduling appointments, processing claims, and managing medical records. This frees up healthcare professionals to focus on patient care and improves the overall efficiency of healthcare systems.",
    icon: FaBusinessTime,
    linkAddress: ""
  },
  {
    title: "Remote Patient Monitoring",
    description: "AI-powered devices can monitor patients remotely, enabling early detection of health problems and more proactive care. This can be particularly beneficial for patients with chronic conditions or those living in remote areas.",
    icon: RiRemoteControl2Fill,
    linkAddress: ""
  },
  {
    title: "Fraud Prevention",
    description: "AI can identify fraudulent activity in healthcare claims, reducing costs and improving the efficiency of systems. By detecting and preventing fraud, AI can help protect healthcare resources and ensure that they are used effectively.",
    icon: SiCyberdefenders,
    linkAddress: ""
  },
];
