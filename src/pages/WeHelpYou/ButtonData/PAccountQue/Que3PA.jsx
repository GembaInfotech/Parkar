import React from 'react'
import Question from "./Common";
import signup from "../../../../assets/signup.PNG";
import signin from "../../../../assets/signin.PNG";


const Que3PA = () => {
  const faqs = [
    {
      question: "How can I log in to my Know2Parking user account?",
      content: (
        <>
          <p className="mb-4">
          You can <strong>access your Know2Parking account</strong> from any of our platforms, access our website from your browser or download our APP on your mobile device.
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>From our website:</strong> access your Know2Parking account via the <strong>USER LOGIN</strong> button at the top right of the website and log in by entering your email address and password, or Google account.
            <img src={signup} alt="signup" className='p-14' />
            </li>
            <li>
            <strong> From our APP:</strong> you can directly follow the tutorial when you download it for the first time, or from the button on the top left of the main screen.

            <img src={signin} alt="signin" className='py-14 px-36' />
           
            <p className='py-6'>And that's it! You can now make your parking reservations and create your parking meter tickets with your Know2Parking account in a faster and more convenient way.</p>
            </li>
          </ul>
          <p>
          Do you want to be aware of all the advantages that you can benefit from being <strong>a Know2Parking user? </strong>Check out our article WHAT ARE THE BENEFITS OF REGISTERING AS A Know2Parking USER?
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

export default Que3PA