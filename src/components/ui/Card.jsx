import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg p-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
