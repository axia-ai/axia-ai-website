import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServicesPage from './Components/Pages/ServicesPage.jsx'
import IndustriesPage from './Components/Pages/IndustriesPage.jsx'
import TestimonialsPage from './Components/Pages/TestimonialsPage.jsx'
import AboutUsPage from './Components/Pages/AboutUsPage.jsx'
import ContactUsPage from './Components/Pages/ContactUsPage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
