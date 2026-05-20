import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BACKEND_URL from "../api/url";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verifyPage, setVerifyPage] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await BACKEND_URL.post("/user/signup-otp", {
        email: email.trim().toLowerCase(),
      });

      setVerifyPage(true);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await BACKEND_URL.post("/user/signup/", {
        name: name.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        password,
        otp,
      });

      localStorage.setItem("token", res.data.accessToken);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getTime = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning!";
    if (hour >= 12 && hour <= 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="min-h-screen flex justify-center items-center z-50 px-4">
      <div className="backdrop-blur-xl bg-white/20 text-white px-7 py-8 w-full max-w-sm rounded-2xl border border-white/40">
        <h1 className="text-center text-2xl mb-4">Hello, {getTime()}</h1>

        {!verifyPage ? (
          <form className="space-y-3" onSubmit={sendOtp}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                className="border border-white/45 rounded-lg px-3 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="border border-white/45 rounded-lg px-3 py-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className="border border-white/45 rounded-lg px-3 py-1 w-full"
                  required
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm px-3 py-px rounded-lg mb-4 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500/50 w-full py-1 rounded-lg mb-3"
            >
              {loading ? "Sending OTP..." : "Create Account"}
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex flex-col items-center gap-3">
              <label htmlFor="OTP" className="text-lg">
                Enter OTP
              </label>

              <div className="flex gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index] || ""}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      const newOtp = otp.split("");

                      newOtp[index] = value;
                      setOtp(newOtp.join(""));

                      if (value && e.target.nextSibling) {
                        e.target.nextSibling.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !otp[index] &&
                        e.target.previousSibling
                      ) {
                        e.target.previousSibling.focus();
                      }
                    }}
                    className="w-12 h-12 text-center text-xl font-semibold rounded-lg bg-white/20 border border-white/45 outline-none"
                  />
                ))}
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm px-3 py-px rounded-lg mb-4 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || otp.length !== 4}
              className="bg-blue-500/50 w-full py-1 rounded-lg mb-3 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        <h3 className="text-center text-sm">
          Already a member?{" "}
          <Link to="/login" className="text-blue-400 underline">
            LogIn
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
