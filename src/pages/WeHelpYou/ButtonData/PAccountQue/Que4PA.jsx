import React from 'react'
import Question from "./Common";
import ForgotPassword from "../../../../assets/ForgotPassword.PNG";
import ResetPassword from "../../../../assets/ResetPassword.PNG";
import signin from "../../../../assets/signin.PNG";


const Que4PA = () => {
  const faqs = [
    {
      question: "I have forgotten my password or I want to change it, what should I do?",
      content: (
        <>
          <p className="mb-4">
          Do you need to <strong>remember your Know2Parking account password</strong>? Do you want to <strong>change your Know2Parking account password</strong>? You can request a new one from any device you use:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            <strong>From our website:</strong> On the top right hand side of the screen, click on the<strong> LOGIN button</strong>. You will find the password reset section by clicking on the sentence <strong> "Forgot Password?"</strong>
            <img src={ForgotPassword} alt="ForgotPassword" className='py-14 px-36' />
            <img src={ResetPassword} alt="ResetPassword" className='py-14 px-36' />
            </li>
            <li>
            <strong> From our APP:</strong>  Click on the button at the top left of the main screen and select the <strong>Login option.</strong> Here you will find the same message <strong>"Forgot Password?".</strong>

            <img src={signin} alt="signin" className='py-14 px-36' />
            </li>
          </ul>
            <p className='py-6'><strong>Enter the email address associated with your Know2Parking account and send the request to reset a new password.</strong> Make sure that the email is spelled correctly and that there are no spaces at the beginning or at the end so that our system will allow you to do this.</p>
           
          <p className='pb-6'>
          As soon as you send the request, you will receive a message in your<strong> email inbox</strong> within a few minutes with a special link to our website where you can enter a new password. The message may take up to 24 hours to arrive in your inbox and the link will be accessible up to 24 hours after it has been sent. Please also check your spam folder in case your administrator has classified our message as <strong> SPAM mail.</strong>
          </p>
          <p>You don't have to do anything else! Now you can access your Know2Parking account as usual. If you need any help or have any questions about this procedure, our<strong> Customer Service</strong> team will be happy to help you. Just send us an email to <strong> info@know2parking.com</strong> with the email address associated with your Know2Parking account and we will get back to you within 24 working hours.

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

export default Que4PA