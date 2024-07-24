import React from "react";
import Button from "../ReusableComponents/Button";

function ContactUsForm() {
  return (
    <div className="flex-1 px-3 py-4 text-center md:text-left text-sm">
      <form className="bg-gray-100 py-6 px-3 md:px-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Contact Us Now to Get Free Quote from Our Experts!
        </h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <Button color="purple">Get a Free Quote!</Button>
      </form>
    </div>
  );
}

export default ContactUsForm;
