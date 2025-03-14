import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center border-4 border-dashed border-purple-500 animate-fadeIn">
      <h2 className="text-2xl font-bold text-purple-600">{title}</h2>
      <div className="mt-4 text-gray-700">{children}</div>
    </div>
  );
};

export default Card;
