import React from 'react'
import Layout from '../Layout/Layout'
import AboutUsVision from '../AboutUsSection/AboutUsVision'
import AboutUsStory from '../AboutUsSection/AboutUsStories'
import AboutUsInfo from '../AboutUsSection/AboutUsInfo'
import AboutUsValues from '../AboutUsSection/AboutUsValues'
import Teams from '../Teams/Teams'

function AboutUs() {
  return (
    <Layout heroHeading={"Our Story"} heroPara={"We help you to unleash the power of AI to transform your business."}>
      {/* <AboutUsVision /> 
      <AboutUsStory /> 
      <AboutUsInfo /> */}
      <AboutUsValues/>
      <Teams/>
    </Layout>
  )
}

export default AboutUs