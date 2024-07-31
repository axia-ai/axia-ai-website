import React from 'react'
import Achievements from '../AchievementSection/Achievements'
import Calender from '../CalenderSection/Calender'
import Community from '../BlogsSection/Blogs'
import Faq from '../FAQSection/Faq'
import Layout from '../Layout/Layout'
import Partners from '../../Components/Partners/Partners'
import CtaSection_UI_Kit from '../../Components/CtaSection_UI_Kit/CtaSection_UI_Kit'
import Vacation from '../../Components/VacationSection/Vacation'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'

function LandingPage() {
    return (
        <Layout heroHeading={"Ready to Revolutionize Your Business with AI?"} heroPara={"Re-Imagine you business with innovative AI strategies and solutions by harnessing the latest in AI Technology to drive growth, efficiency, and scalability."}>
            <Partners/>
            <Achievements />
            <Calender />
            <CtaSection_UI_Kit/>
            <Community />
            <Faq />
            <TestimonialSection/>
            <Vacation/>
        </Layout>
    )
}

export default LandingPage