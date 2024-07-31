import React from 'react'
import Layout from '../Layout/Layout'
import IndustriesCards from '../IndustriesSection/IndustriesCards'

function Industries() {
  return (
    <Layout heroHeading={"Industries We Serve"} heroPara={"Business Transformations can be complex. Explore the domains we aim and serve to simplify the process."}>
      <IndustriesCards />
    </Layout>
  )
}

export default Industries