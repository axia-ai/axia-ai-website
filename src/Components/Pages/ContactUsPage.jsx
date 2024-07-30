import React from 'react'
import Layout from '../Layout/Layout'
import ContactUsPage from '../ContactUsComponents/ContactUsPage';

function ContactUs() {
  return (
    <Layout
      heroHeading={"Contact Us"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <ContactUsPage/>
    </Layout>
  );
}

export default ContactUs