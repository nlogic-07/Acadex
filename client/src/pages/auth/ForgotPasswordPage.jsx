import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/slices/authSlice";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRequestingForToken } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return;
    }

    try {
      await dispatch(forgotPassword({ email })).unwrap();
      setIsSubmitted(true);
    } catch (e) {
      setError(
        e?.message || "Failed to send reset email. Please try again later",
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
            Acadex
          </h1>

          <p className="mt-3 text-slate-600 text-lg">Reset your password</p>
        </div>

        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
          <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
            <span className="text-2xl">✉</span>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800">
            Check your email
          </h2>

          <p className="mt-3 text-slate-600">
            We sent a password reset link to:
          </p>

          <p className="mt-1 font-medium text-slate-800 break-all">{email}</p>

          <p className="mt-4 text-sm text-slate-500">
            If an account with this email exists, you will receive a password
            reset link shortly.
          </p>

          <div className="mt-7 space-y-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-60"
            >
              Send Another Reset Email
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
          Acadex
        </h1>

        <p className="mt-3 text-slate-600 text-lg">Reset your password</p>

        <p className="mt-1 text-sm text-slate-500">
          We'll send you instructions to reset your password
        </p>
      </div>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                if (error) {
                  setError("");
                }
              }}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
                error
                  ? "border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isRequestingForToken}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-60"
          >
            {isRequestingForToken
              ? "Sending Reset Email..."
              : "Send Reset Email"}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Remember your password? Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
