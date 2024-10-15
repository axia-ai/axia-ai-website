import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ServicesPage from "./Components/Pages/ServicesPage.jsx";
import IndustriesPage from "./Components/Pages/IndustriesPage.jsx";
import TestimonialsPage from "./Components/Pages/TestimonialsPage.jsx";
import AboutUsPage from "./Components/Pages/AboutUsPage.jsx";
import ContactUsPage from "./Components/Pages/ContactUsPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// Service Sub Components Files Imports
import AIDevelopment from "./Components/ServicesSubComponents/AiDevelopment.jsx";
import DataEngineering from "./Components/ServicesSubComponents/DataEngineering.jsx";
import ChatGPTIntegrations from "./Components/ServicesSubComponents/ChatgptIntegrations.jsx";
import AppDevelopment from "./Components/ServicesSubComponents/AppDevelopment.jsx";
import CloudComputing from "./Components/ServicesSubComponents/CloudComputing.jsx";
import Cybersecurity from "./Components/ServicesSubComponents/Cybersecurity.jsx";
import DevOps from "./Components/ServicesSubComponents/Devops.jsx";
import IOT from "./Components/ServicesSubComponents/IOT.jsx";
import SoftwareDevelopment from "./Components/ServicesSubComponents/SoftwareDevelopment.jsx";
// Industries Sub Components Files Imports
import Healthcare from "./Components/IndustriesSubSection/Healthcare.jsx";
import Finance from "./Components/IndustriesSubSection/Finance.jsx";
import Retail from "./Components/IndustriesSubSection/Retail.jsx";
import Education from "./Components/IndustriesSubSection/Education.jsx";
import Energy from "./Components/IndustriesSubSection/Energy.jsx";
import EntertainmentAndMedia from "./Components/IndustriesSubSection/EntertainmentAndMedia.jsx";
import GovtAndPublicSector from "./Components/IndustriesSubSection/GovtAndPublicSector.jsx";
import Manufacturing from "./Components/IndustriesSubSection/Manufacturing.jsx";
import SupplyChain from "./Components/IndustriesSubSection/SupplyChain.jsx";
import Telecommunications from "./Components/IndustriesSubSection/Telecommunications.jsx";
import Legal from "./Components/IndustriesSubSection/Legal.jsx";
import RealEstate from "./Components/IndustriesSubSection/RealEstate.jsx";
import PrivacyPolicyPage from "./Components/Pages/PrivacyPolicyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Services Sub Components Start */}
          <Route path="/services/ai-development" element={<AIDevelopment />} />
          <Route
            path="/services/data-engineering"
            element={<DataEngineering />}
          />
          <Route
            path="/services/chatgpt-integrations"
            element={<ChatGPTIntegrations />}
          />
          <Route
            path="/services/app-development"
            element={<AppDevelopment />}
          />
          <Route
            path="/services/cloud-computing"
            element={<CloudComputing />}
          />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/iot" element={<IOT />} />
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          {/* Services Sub Components End */}
          <Route path="/industries" element={<IndustriesPage />} />
          {/* Industries Sub Components Start */}
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/energy" element={<Energy />} />
          <Route
            path="/industries/entertainment-and-media"
            element={<EntertainmentAndMedia />}
          />
          <Route
            path="/industries/government-and-public-sector"
            element={<GovtAndPublicSector />}
          />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/supply-chain" element={<SupplyChain />} />
          <Route
            path="/industries/telecommunications"
            element={<Telecommunications />}
          />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          {/* Industries Sub Components End */}
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
