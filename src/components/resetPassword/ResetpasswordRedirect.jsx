import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPasswordRedirect() {
    console.log("passworddd.....");
  const { token } = useParams();

  console.log("token", token);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(null); // null: pending, true: valid, false: invalid
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(`http://localhost:4005/resetpassword/reset-password/${token}`);
        console.log(response);
        if (response?.data?.status === 200) {
          setIsValid(true);
        } else {
          setIsValid(false);
          setErrorMessage('Invalid or expired token.');
        }
      } catch (error) {
        setIsValid(false);
        setErrorMessage('An error occurred while verifying the token.');
      }
    };

    verifyToken();
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4005/resetpassword/reset-password', {
        token,
        password,
        confirmPassword,
      });
      console.log(response);
      if (response?.data?.status) {
        navigate('/signin'); // Redirect to sign-in page after successful password reset
      } else {
        setErrorMessage(response.data.message || 'Failed to reset password.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while resetting the password.');
    }
  };

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  if (isValid === false) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-semibold mb-4">Reset your password</h1>
      <form className="w-full max-w-md" onSubmit={handleResetPassword}>
        <div className="relative mt-4 flex items-center">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-lg border bg-white px-4 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="New password"
            required
            autoComplete="off"
          />
        </div>
        <div className="relative mt-4 flex items-center">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full rounded-lg border bg-white px-4 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Confirm new password"
            required
            autoComplete="off"
          />
        </div>
        {errorMessage && (
          <div className="mt-4 text-red-500">
            {errorMessage}
          </div>
        )}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full transform rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Reset password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordRedirect;
