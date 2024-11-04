import React from 'react'
import Question from "./Common";
import logout from "../../../../assets/logout.PNG";

const Que9PA = () => {
  const faqs = [
    {
      question: "How can I log out of my Know2Parking account?",
      content: (
        <>
          <p className="mb-4">
          Can't find the option <strong>to log out of your Know2Parking account?</strong> You can log out of your Know2Parking account at any time:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>From our website:</strong> in the drop-down menu at the top right of the website, where its name is written, you will find the option <strong>Log out at the end of the list.</strong>

            <img src={logout} alt="logout" className='py-14 px-36' />
            </li>
            <li>
            <strong> From our APP:</strong> in the menu at the top left, go to the My Account section. Then, select the option My details, you will find the <strong>Logout button.</strong> 
            </li>
          </ul>
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

export default Que9PA