import React from "react";
import Question from "../PAccountQue/Common";


const Que5FAQ = () => {
  const faqs = [
    {
      question: "How can I find out if a car park is secure?",
      content: (
        <>
        <p>Vehicle <strong>security</strong> is one of our priorities. <strong>All the car parks with which we collaborate are insured</strong>. In addition, a large majority of them have <strong>
        different security and surveillance systems (on-site surveillance and CCTV)</strong>.
        </p>
          <p className="py-6">
          The <strong>car parks with surveillance</strong> will be marked in the corresponding advert on our platform with this drawing of a security camera.
          </p>
          
        </>
      ),
    },
  ];
  return (
    <div className="my-8 px-4 sm:my-8 sm:px-24 md:px-48 ">
      <div className="p-6">
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default Que5FAQ;
