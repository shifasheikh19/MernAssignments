// src/components/Card.jsx
import React from "react";

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

export { Card, CardContent };
