import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className={`text-2xl md:text-2xl font-bold text-blue-700 mb-4`}>
      {children}
    </h1>
  );
};

export default Title;
