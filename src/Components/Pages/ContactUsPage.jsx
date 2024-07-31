import React from 'react'
import Layout from '../Layout/Layout'
import ContactUsPage from '../ContactUsComponents/ContactUsPage';

function ContactUs() {
  return (
    <Layout
      heroHeading={"Contact Us"}
      heroPara={
        "We would love to get in touch and explore how we can help you."
      }
    >
      <ContactUsPage />
    </Layout>
  );
}

export default ContactUs