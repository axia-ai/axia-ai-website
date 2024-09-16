import React, { useState } from "react";
import Button from "../ReusableComponents/Button";
import countryArray from "../../JsonData/country";
import domainArray from "../../JsonData/domain";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    JobTitle: "",
    Company: "",
    Subject: "",
    Location: "",
    Domain: "",
    Message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const data = new FormData(formEle);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxT09OHC3uSXZ5cg7u9ATc_FiFUn6QErnovrp37A4PhlvOUya6mFtuKx5KpxG8baCDK/exec",
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    );

    if (response.status === 500) {
      toast.error("Form submission failed!");
    } else {
      setFormData({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        JobTitle: "",
        Company: "",
        Subject: "",
        Location: "",
        Domain: "",
        Message: "",
      });
      toast.success("Form submitted successfully!");
    }
  }

  return (
    <div>
      <form className="Form" onSubmit={Submit}>
        <div className="p-2 md:p-5 bg-white rounded-lg mt-10 md:mt-0 ml-0 md:ml-10 md:w-2/3 w-full text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your First Name"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="140"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Last Name"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="140"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                type="email"
                placeholder="Please Enter a Valid Email"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Phone Number with the Country Code"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="140"
              />
            </div>
            <div>
              <label className="block text-gray-700">Job Title</label>
              <input
                name="JobTitle"
                value={formData.JobTitle}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Job Title"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="140"
              />
            </div>
            <div>
              <label className="block text-gray-700">Company</label>
              <input
                name="Company"
                value={formData.Company}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Company Name"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="140"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2">Select Subject</label>
              <input
                type="radio"
                id="general"
                name="Subject"
                value="General Inquiry"
                checked={formData.Subject === "General Inquiry"}
                onChange={handleChange}
                className="mr-2 ml-1"
                required
              />
              <label htmlFor="general">General Inquiry</label>
              <input
                type="radio"
                id="project"
                name="Subject"
                value="Project Discussion"
                checked={formData.Subject === "Project Discussion"}
                onChange={handleChange}
                className="mr-2 ml-1"
                required
              />
              <label htmlFor="project">Project Discussion</label>
              <input
                type="radio"
                id="careers"
                name="Subject"
                value="Careers"
                checked={formData.Subject === "Careers"}
                onChange={handleChange}
                className="mr-2 ml-1"
                required
              />
              <label htmlFor="careers">Careers</label>
              <input
                type="radio"
                id="feedback"
                name="Subject"
                value="Feedback"
                checked={formData.Subject === "Feedback"}
                onChange={handleChange}
                className="mr-2 ml-1"
                required
              />
              <label htmlFor="feedback">Feedback</label>
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <select
                name="Location"
                value={formData.Location}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
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
              <select
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
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
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your message..."
                required
                maxLength="140"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 text-right">
              <Button color={"purple"}>Send Message</Button>
            </div>
          </div>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default ContactUsForm;
