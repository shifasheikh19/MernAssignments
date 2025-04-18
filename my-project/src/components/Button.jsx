// src/components/Button.jsx
import React from "react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

export { Button };
