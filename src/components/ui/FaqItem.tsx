"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center p-4 cursor-pointer " onClick={toggleOpen}>
        <h3 className="text-lg font-medium text-cinza-900-branco">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-cinza-900-branco`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 9l7 7 7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 text-cinza-900-branco">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
