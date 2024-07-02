import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Achievements from './Components/AchievementSection/Achievements'
import Demo from './Components/DemoSection/Demo'
import Footer from './Components/Footer/Footer'
import Calender from './Components/CalenderSection/Calender'
import Community from './Components/BlogsSection/Blogs'
import Faq from './Components/FAQSection/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Achievements/>
      <Calender/>
      <Community/>
      <Demo/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
