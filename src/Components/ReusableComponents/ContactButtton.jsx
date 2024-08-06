import React from "react";

function ContactButtton() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <a href="/contactUs">
        <button className="bg-[#1E1E1E] text-white px-3 py-2 rounded-md text-xs md:text-sm font-medium hover:bg-primary">
          Talk To Us
        </button>
      </a>
    </div>
  );
}

export default ContactButtton;
