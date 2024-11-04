import React from "react";

const Common = ({ question, content }) => {
  return (
    <div className="mb-6 text-start">
      <h1 className="max-sm:text-xl text-2xl mb-4 font-bold">{question}</h1>
      <div className="text-gray-700 text-sm  max-sm:text-[11px]">{content}</div>
    </div>
  );
};

export default Common;
