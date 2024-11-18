import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import LoadingSpinner from "../components/loader/ButtonLoadingSpinner";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();  // Get the token from URL parameters

  const handleVerify = useCallback(() => {
    setLoading(true);
    const verificationLink = `http://know2parking.com:4005/activate/activate-account/${token}`;
    
    axios
      .get(verificationLink)
      .then((res) => {
        if (res.status === 200) {
          navigate("/email-verified");
          setError("");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(
          err.response?.data?.message || "Failed to verify, please try again."
        );
        setLoading(false);
      });
  }, [token, navigate]);

  // Redirect if error indicates already verified
  useEffect(() => {
    if (error === "Email is already verified") {
      navigate("/signin");
    }
  }, [error, navigate]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-md bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Verify your email address</h2>
          <p className="mb-4">
            Click the button below to verify your email.
          </p>

          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          <button
            disabled={loading}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleVerify}
          >
            {loading ? (
              <LoadingSpinner loadingText={"Verifying..."} />
            ) : (
              "Verify"
            )}
          </button>
          <button
            className="ml-4 rounded-lg bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
