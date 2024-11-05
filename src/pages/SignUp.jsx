import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, clearMessage } from "../redux/actions/authActions";
import { Link } from "react-router-dom";
import ContextAuthModal from "../components/modals/ContextAuthModal";
import { RxCross1 } from "react-icons/rx";
import ButtonLoadingSpinner from "../components/loader/ButtonLoadingSpinner";

const SignUpNew = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpError = useSelector((state) => state.auth?.signUpError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    setLoadingText("Signing up...");

    const formData = {
      name,
      email,
      password,
      isConsentGiven,
    };

    const timeout = setTimeout(() => {
      setLoadingText(
        "This is taking longer than usual. Please wait while backend services are getting started."
      );
    }, 5000);

    await dispatch(signUpAction(formData, navigate));
    setLoading(false);
    setIsConsentGiven(false);
    clearTimeout(timeout);
  };

  const handleClearError = () => {
    dispatch(clearMessage());
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-6">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mx-auto flex justify-center"></div>
          {signUpError &&
            Array.isArray(signUpError) &&
            signUpError.map((err, i) => (
              <div
                className="mt-6 flex items-center rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                role="alert"
                key={i}
              >
                <span className="ml-2 block sm:inline">{err}</span>
                <button
                  className="ml-auto font-bold text-red-700"
                  onClick={handleClearError}
                >
                  <RxCross1 className="h-3 w-3" />
                </button>
              </div>
            ))}

          <div className="mt-6 flex items-center justify-center">
            <Link
              to={"/signin"}
              className="w-1/3 border-b border-gray-400 pb-4 text-center font-medium text-gray-800"
            >
              Sign In
            </Link>
            <Link
              to={"/signup"}
              className="text-cente w-1/3 border-b-2 border-blue-500 pb-4 font-medium text-gray-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Consent Checkbox */}
          <div className="mt-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isConsentGiven}
                onChange={() => setIsConsentGiven(!isConsentGiven)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">
                I agree to the terms and conditions for registration
              </span>
            </label>
          </div>

          {/* Username Field */}
          <div className="relative mt-6 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-lg border bg-white px-11 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Username"
              required
              autoComplete="off"
              disabled={!isConsentGiven}
            />
          </div>

          {/* Email Field */}
          <div className="relative mt-6 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full rounded-lg border bg-white px-11 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Email address"
              required
              autoComplete="off"
              disabled={!isConsentGiven}
            />
          </div>

          {/* Password Field */}
          <div className="relative mt-4 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-lg border bg-white px-10 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Password"
              required
              autoComplete="off"
              disabled={!isConsentGiven}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative mt-4 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full rounded-lg border bg-white px-10 py-2 sm:py-3 text-gray-700 border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Confirm Password"
              required
              autoComplete="off"
              disabled={!isConsentGiven}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
              disabled={loading || !isConsentGiven}
            >
              {loading ? <ButtonLoadingSpinner /> : "Sign Up"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link to={"/signin"} className="text-sm text-blue-500 hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpNew;
