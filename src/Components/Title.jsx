import React from "react";

const Title = ({ children, className = "" }) => {
  return (
    <h1 className={`text-2xl md:text-2xl font-bold text-[#4F46E5] mb-4 ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
