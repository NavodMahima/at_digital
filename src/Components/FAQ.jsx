import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Title from "./Title";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer: "Answer for question 2 goes here.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer: "Answer for question 3 goes here.",
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12">
      <Title className="text-center">Frequently asked questions</Title>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg p-4 shadow-md border-none">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold"
              style={{ color: openIndexes.includes(index) ? "#4F46E5" : "black" }}
            >
              {faq.question}
              {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndexes.includes(index) && (
              <p className="mt-2 text-[#6F6C90]" >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
