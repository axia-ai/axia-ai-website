import React from 'react'
import Layout from '../Layout/Layout'
import ContactUsPage from '../ContactUsComponents/ContactUsPage';
import Demo from '../DemoSection/Demo';

function ContactUs() {
  return (
    <Layout
      heroHeading={"Contact Us"}
      heroPara={
        "We would love to get in touch and explore how we can help you."
      }
      DisplayComponent={'False'}   //If Demo component is not required then give 'False' or give 'True'
    >
      <ContactUsPage />
      <Demo></Demo>
    </Layout>
  );
}

export default ContactUs