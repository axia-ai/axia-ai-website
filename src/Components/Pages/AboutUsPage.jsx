import React from 'react'
import Layout from '../Layout/Layout'
import AboutUsVision from '../AboutUsSection/AboutUsVision'
import AboutUsStory from '../AboutUsSection/AboutUsStories'
import AboutUsInfo from '../AboutUsSection/AboutUsInfo'

function AboutUs() {
  return (
    <Layout heroHeading={"About Us"} heroPara={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"}>
      <AboutUsStory />
      <AboutUsVision />
      <AboutUsInfo/>
    </Layout>
  )
}

export default AboutUs