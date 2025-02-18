import React from "react";

const Button = ({ children, onClick, className = "", href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-6 py-3 bg-[#F28D35] text-white font-semibold rounded hover:bg-orange-600 transition duration-300 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`px-6 py-3 bg-[#F28D35] text-white font-semibold rounded hover:bg-orange-600 transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
