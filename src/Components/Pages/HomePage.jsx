import React from 'react'
import Achievements from '../AchievementSection/Achievements'
import Calender from '../CalenderSection/Calender'
import Community from '../BlogsSection/Blogs'
import Faq from '../FAQSection/Faq'
import Layout from '../Layout/Layout'

function LandingPage() {
    return (
        <Layout heroHeading={"Create Engaging Landing Pages"} heroPara={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '"}>
            <Achievements />
            <Calender />
            <Community />
            <Faq />
        </Layout>
    )
}

export default LandingPage