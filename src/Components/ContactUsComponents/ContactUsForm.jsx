import React from "react";
import Button from "../ReusableComponents/Button";

function ContactUsForm() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-lg mt-10 md:mt-0 ml-0 md:ml-10 md:w-2/3 w-full text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="+1 012 3456 789"
          />
        </div>
        <div>
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Select Subject?</label>
          <div className="flex items-center mt-2 space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="form-radio text-blue-500"
                checked
              />
              <span className="ml-2">General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">General Inquiry</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="subject"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">General Inquiry</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <select className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Location</option>
            {/* Add more options here */}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Choose a domain</label>
          <select className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Choose a domain</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 text-right">
          <Button color={"purple"}>Send Message</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
