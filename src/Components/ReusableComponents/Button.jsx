import React from "react";

function Button({ children, color, link ,tab }) {
  const DICTIONARY = {
    purple: "bg-primary hover:bg-purple-700 text-white",
    white: "bg-white hover:bg-gray-100 text-primary",
  };
  return (
    <a href={link} target={tab}>
      <button
        className={`${DICTIONARY[color]} px-6 py-3 rounded-2xl text-sm font-medium font-semibold text-xs md:text-sm`}
      >
        <span className="flex items-center">{children}</span>
      </button>
    </a>
  );
}

export default Button;
