import React from 'react'
import Layout from '../Layout/Layout'
import ServicesSection from '../ServicesComponent/ServicesSection'
import CtaServices from '../ServicesComponent/CtaServices'
import Testimonials_Services from '../ServicesComponent/Testimonials_Services'
import Features_Services from '../ServicesComponent/Features_Services'

function Services() {
  return (
    <Layout heroHeading={"Service"} heroPara={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"}>
      
      <ServicesSection/>
      <Features_Services/>
      <Testimonials_Services/>
      <CtaServices/>
      
    </Layout>
    
  )
}

export default Services