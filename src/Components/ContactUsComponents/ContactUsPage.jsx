import React from 'react'
import contactUsImage from "../../assets/contactUsImage.png";
// import testimonial4 from "../../assets/testimonial-4.png";
import ContactUsForm from './ContactUsForm';

function ContactUsPage() {
    return (
        <div className="flex flex-col md:flex-row items-center my-10 px-3 md:px-28">
            <div className="flex-1 text-left">
                <h2 className="text-2xl sm:text-3xl font-normal mb-2">
                    Love to Hear From You, Get In Touch
                </h2>
                <p className="mb-4 text-sm">
                    At nullam leo consectetur euismod enim. Orci donec sapien et semper
                    fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                </p>
                <img
                    src={contactUsImage}
                    alt="People discussing business"
                    className="w-10/12 sm:w-8/12 md:w-10/12 rounded-lg mx-auto my-10"
                />
            </div>
            <ContactUsForm />

        </div>
    )
}

export default ContactUsPage