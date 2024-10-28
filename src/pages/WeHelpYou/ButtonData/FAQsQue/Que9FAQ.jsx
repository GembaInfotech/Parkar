import React from "react";
import Question from "../PAccountQue/Common";


const Que9FAQ = () => {
  const faqs = [
    {
      question: "Due to unforeseen circumstances, I did not take advantage of my Know2Parking booking, can I claim a refund?",
      content: (
        <>
        <p className="pb-6">
        Sometimes plans don't work out as you expected. If for any reason beyond your control you are unable to enjoy your Know2Parking booking, please <strong>send us an email to info@know2parking.com </strong>with all the information about what happened and the necessary documentation attached to support your incident.
        </p>
        <p>At Know2Parking, we consider the following scenarios that we understand to make it impossible for any reason to use your Know2Parking stay and the documents that we accept as proof to open a claim for a refund:</p>
       
          <ul className="list-decimal list-inside my-4">
            <li>
              <strong>Double payment:</strong> receipt of the second payment made at the car park. If you do not have this document, you can send us the details of the card payment. In both cases, the amount, the concept and the date of validity of the payment must be clearly shown.
            </li>
            <br />
            <li>
              <strong>Technical incident:</strong> insurance document, official document or receipt from the mechanic, towing service or any other relevant document that justifies a fault in the vehicle.
            </li>
            <br />
            <li>
              <strong>Force majeure or unforeseen circumstances</strong> (flight cancellation, illness, death, etc.): proof or document signed or stamped by a professional. Please do not submit any information referring to the person, privacy or detailed reason for the force majeure.
            </li>
          </ul>
          <p>Sometimes, depending on the case, we may <strong>ask you for photographs or call logs</strong>. In the last case, you can send us a screenshot clearly showing the number called, the duration and the date of execution. Calls that are not relevant to the case can be deleted or covered.
          </p>
          <p className="py-6">
          TAll the information provided will be forwarded to the car park in order to claim the refund. Once we have all the information, we will contact the car park to claim the refund. We remind you that, in accordance with our terms and conditions, accepted during the purchase process and available at all times on our website, <strong>the refund decision depends exclusively on the car park</strong>. Therefore, Know2Parking cannot guarantee a refund.
</p>
<p>
It can take a maximum of 10 working days to get back to you and inform you of the resolution of your claim. Remember that our <strong>Customer Service</strong> team is available on working days to deal with your claim.
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

export default Que9FAQ;
