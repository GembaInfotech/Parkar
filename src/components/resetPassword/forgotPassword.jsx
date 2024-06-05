import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom"
import { forgotAction } from '../../redux/actions/resetPasswordAction';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    dispatch(forgotAction(email, navigate));

    console.log('Reset password email:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Reset your password</h3>
        <p className="mb-4 text-gray-600 text-sm">
          To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
