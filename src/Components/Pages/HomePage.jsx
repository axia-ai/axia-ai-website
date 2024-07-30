import React from 'react'
import Achievements from '../AchievementSection/Achievements'
import Calender from '../CalenderSection/Calender'
import Community from '../BlogsSection/Blogs'
import Faq from '../FAQSection/Faq'
import Layout from '../Layout/Layout'
import Partners from '../../Components/Partners/Partners'

function LandingPage() {
    return (
        <Layout heroHeading={"Ready to Revolutionize Your Business with AI?"} heroPara={"Re-Imagine you business with innovative AI strategies and solutions by harnessing the latest in AI Technology to drive growth, efficiency, and scalability."}>
            <Partners/>
            <Achievements />
            <Calender />
            <Community />
            <Faq />
        </Layout>
    )
}

export default LandingPage