// data/industryCards.js
import { IoIosInfinite } from "react-icons/io";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";

export const FirstDeck = [
  {
    title: "CI/CD Pipeline Implementation",
    description: "We help set up continuous integration and continuous delivery (CI/CD) pipelines to automate the software development and deployment process. This ensures that code changes are integrated, tested, and deployed frequently, reducing the risk of errors, accelerating time-to-market, and improving overall software quality.",
    icon: IoIosInfinite,
    linkAddress: ""
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "We manage infrastructure using code, allowing for consistent and repeatable deployments. This eliminates manual configuration errors, enables faster provisioning and scaling of resources, and promotes efficient and reliable infrastructure management, ultimately driving operational and cost efficiency.",
    icon: AiOutlineDatabase,
    linkAddress: ""
  },
  {
    title: "Containerization and Orchestration",
    description: "We utilize containers (like Docker) to help package applications and their dependencies into portable units. Orchestration tools (like Kubernetes) can then manage and scale these containers across multiple hosts. This provides flexibility, portability, and efficient resource utilization.",
    icon: FaDocker,
    linkAddress: ""
  },
  {
    title: "Monitoring and Logging",
    description: "We help in implementing robust monitoring and logging solutions to track application performance, identify issues, and optimize operations. This includes monitoring metrics like CPU usage, memory consumption, and response times, providing valuable insights for troubleshooting and performance optimization.",
    icon: MdMonitorHeart,
    linkAddress: ""
  },
  {
    title: "Collaboration and Communication Tools",
    description: "We provide tools and practices to foster collaboration between development, operations, and data science teams, ensuring seamless communication and knowledge sharing. This can involve using collaboration platforms and communication channels to streamline workflows and improve teamwork.",
    icon: GiSatelliteCommunication,
    linkAddress: ""
  },
  {
    title: "AI Model Deployment and Management",
    description: "We help deploy and manage machine learning models in production environments, ensuring scalability, reliability, and performance. This includes tasks like model serving, version control, and monitoring model performance to optimize model accuracy and effectiveness over time.",
    icon: LuBrain,
    linkAddress: ""
  }
];
