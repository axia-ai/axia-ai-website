import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Achievements from '../AchievementSection/Achievements'
import Demo from '../DemoSection/Demo'
import Footer from '../Footer/Footer'
import Calender from '../CalenderSection/Calender'
import Community from '../BlogsSection/Blogs'
import Faq from '../FAQSection/Faq'

function LandingPage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Achievements />
            <Calender />
            <Community />
            <Demo />
            <Faq />
            <Footer />
        </>
    )
}

export default LandingPage