import React from 'react'
import Layout from '../Layout/Layout'
import IndustriesCards from '../IndustriesSection/IndustriesCards'

function Industries() {
  return (
    <Layout heroHeading={"Industries"} heroPara={"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"}>
      <IndustriesCards/>
    </Layout>
  )
}

export default Industries