import React from 'react'
import Question from "./Common";
import signup from "../../../../assets/signup.PNG";
import signupform from "../../../../assets/signupform.PNG";


const Que2PA = () => {
  const faqs = [
    {
      question: "How can I create a Know2Parking account?",
      content: (
        <>
          <p className="mb-4">
          Have you read our article WHAT ARE THE ADVANTAGES OF REGISTERING AS A Know2Parking USER? and can't wait to <strong>create your Know2Parking account?</strong> You're in the right article!
          </p>
          <p className="mb-2">
          Registering as a Know2Parking user is very simple and you can do it from any device:
          </p>
          <ul className="list-disc list-inside my-4">
            <li>
              <strong>Register from our website:</strong> on the top right-hand side, by clicking on the Register button.
            </li>
             <br />
            <li>
              <strong>Register from our APP:</strong> if it is the first time you use our APP, in the initial tutorial we will automatically ask you if you have a Know2Parking account and you can register directly. If it is not your first time, click on the main menu button at the top left of the screen and you will find the Register button.
            </li>
          </ul>
          <p className='py-6'>
          In just <strong>three easy steps</strong>, you will have access to a whole range of benefits and comforts:
          </p>
          <ul className="list-decimal list-inside my-4">
            <li>
            First of all, if you access our website, we will give you the option of <strong>USER SIGNUP</strong>.
            <img src={signup} alt="signup" className='p-14' />
            </li>
            <li>
            <strong>Fill in the fields</strong> that we will show you below. Enter your details, register a valid password and choose an email account of your choice which we will associate with your user. You also have the option of using a Google account.
            <img src={signupform} alt="signupform" className='py-14 px-36' />
            <p>If you have already booked with us without registering as a user, our system will automatically create an account for you. In order to access your account, you will need to follow the same process for password recovery. See our article I HAVE FORGOTTEN MY PASSWORD OR I WANT TO CHANGE IT. WHAT SHOULD I DO? for more information.</p>
            </li>
            <br />
            <br />
            <li>
            <strong>Finally</strong>, you can read them by clicking on the terms and conditions, although they are always available on our website. You also have the option to agree to receive news and promotions. As we indicated, we do not want to fill your mailbox; we will only inform you about our promotions that suit your previous purchases and you will get exclusive discounts for our registered users.
            <p className='py-6'>And that's it! You don't have to do anything else, just browse <strong>Know2Parking</strong> and make your purchases quickly and easily.</p>
            </li>
          </ul>
          <p>
          If you have any questions during the process or need our help, our Customer Service team is at your full disposition through at our <strong>email address info@know2parking.com</strong>.
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

export default Que2PA