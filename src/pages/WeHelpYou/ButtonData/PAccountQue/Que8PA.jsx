import React from 'react'
import Question from "./Common";


const Que8PA = () => {
  const faqs = [
    {
      question: "How can I get an invoice for a Know2Parking booking from my account?",
      content: (
        <>
          <p>
          How was your booking with Know2Parking? Would you like <strong>to leave a review for Know2Parking</strong>? Perhaps you would like other users to know what your experience was like to help them in their decision? Whatever your reason, <strong>we want to know your opinion, as your comments are what help us to continue improving </strong>the quality of our service.
          </p>
          <p className="py-6">If you have suffered an incident and you want to contact our Customer Service team, you can <strong>send us an email toinfo@know2parking.com</strong> explaining what happened. In this way, we will open a formal complaint and we will offer you all the support we can to correct our mistake.
</p>
<p>On the other hand, <strong>there are other public domain platforms where you can also leave a review of Know2Parking</strong>, leave us your rating and consult other users' opinions. All the notes and comments you leave us here will be public.</p>
          
          <ul className="list-disc list-inside my-4">
            <li>
            <strong>Know2Parking review on Google Play </strong>(for Android devices users)
            </li>
            <li>
            <strong>Know2Parking review on App Store </strong>(for IOS devices users) 
            </li>
          </ul>
            <p className='py-6'>We look forward to reading your feedback! Your opinion will help us to keep improving day by day.
</p>
        </>
      ),
    },
  ];
  return (
    <div className="px-4 sm:px-24 md:px-48 my-8 sm:my-8 ">
      
      <div className="p-6">
        {faqs.map((faq, index) => (
          <Question key={index} question={faq.question} content={faq.content} />
        ))}
      </div>
    </div>
  )
}

export default Que8PA