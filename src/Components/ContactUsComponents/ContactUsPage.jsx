import React from 'react'
import ContactUsForm from './ContactUsForm';
import ContactUsInformation from './ContactUsInformation';

function ContactUsPage() {
    return (
        <div className="flex flex-col md:flex-row items-center my-10 px-3 md:px-28 mx-2 md:mx-8 shadow-lg rounded-lg">
            <ContactUsInformation/>
            <ContactUsForm />
        </div>
    )
}

export default ContactUsPage