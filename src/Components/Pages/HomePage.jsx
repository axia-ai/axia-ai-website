import React from 'react'
import Achievements from '../AchievementSection/Achievements'
import Calender from '../CalenderSection/Calender'
import Community from '../BlogsSection/Blogs'
import Faq from '../FAQSection/Faq'
import Layout from '../Layout/Layout'
import Vacation from '../../Components/VacationSection/Vacation'
import CtaSection_UI_Kit from '../../Components/CtaSection_UI_Kit/CtaSection_UI_Kit'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'
import Partners from '../../Components/Partners/Partners'
import Services from '../../Components/Services/Services'
import Teams from '../../Components/Teams/Teams'
import CtaSection from '../CtaSection/CtaSection'
import Industries from '../Industries/Industries'

function LandingPage() {
    return (
        <Layout heroHeading={"Ready to Revolutionize Your Business with AI?"} heroPara={"Re-Imagine you business with innovative AI strategies and solutions by harnessing the latest in AI Technology to drive growth, efficiency, and scalability."}>
            <Partners/>
            <Services/>
            <CtaSection/>
            <Industries/>
            <Achievements />
            <Calender />
            <CtaSection_UI_Kit/>
            <Community />
            <Faq />
            <Teams/>
            <TestimonialSection/>
            <Vacation/>
        </Layout>
    )
}

export default LandingPage