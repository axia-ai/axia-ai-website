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
import AiDevelopment from "./Components/ServicesSubComponents/AiDevelopment.jsx";
import DataScience from "./Components/ServicesSubComponents/DataScience.jsx";
import ChatgptIntegrations from "./Components/ServicesSubComponents/ChatgptIntegrations.jsx";
import AppDevelopment from "./Components/ServicesSubComponents/AppDevelopment.jsx";
import CloudComputing from "./Components/ServicesSubComponents/CloudComputing.jsx";
import Cybersecurity from "./Components/ServicesSubComponents/Cybersecurity.jsx";
import Devops from "./Components/ServicesSubComponents/Devops.jsx";
import IOT from "./Components/ServicesSubComponents/IOT.jsx";
import SoftwareDevelopment from "./Components/ServicesSubComponents/SoftwareDevelopment.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Services Sub Components Start */}
          <Route path="/services/ai-development" element={<AiDevelopment />} />
          <Route path="/services/data-science" element={<DataScience />} />
          <Route
            path="/services/chatgpt-integrations"
            element={<ChatgptIntegrations />}
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
          <Route path="/services/devops" element={<Devops />} />
          <Route path="/services/iot" element={<IOT />} />
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          {/* Services Sub Components End */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
