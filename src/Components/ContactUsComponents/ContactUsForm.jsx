import React from "react";
import Button from "../ReusableComponents/Button";
import countryArray from "../../JsonData/country";
import domainArray from "../../JsonData/domain";

function ContactUsForm() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-lg mt-10 md:mt-0 ml-0 md:ml-10 md:w-2/3 w-full text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Please Enter a Valid Email"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your Phone Number with the Country Code"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            placeholder="Enter your Job Title"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            placeholder="Enter your Company Name"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 mb-2">Select Subject?</label>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />  
          <label for="html">General Inquiry</label>
           <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          /> 
          <label for="html">Project Discussion</label>
           <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          />
          <label for="html">Careers</label>
           <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          /> 
          <label for="css">Feedback</label> 
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
            <label for="javascript">Others</label>
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <select className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Choose a location</option>

            {countryArray.map((country) => (
              <option key={country.id} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Choose a domain</label>
          <select className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Choose a domain</option>

            {domainArray.map((domain) => (
              <option key={domain.id} value={domain.value}>
                {domain.label}
              </option>
            ))}
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
