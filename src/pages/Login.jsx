import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center z-50">
      <div className="backdrop-blur-xl bg-white/20 text-white px-7 py-8 rounded-2xl">
        <h1 className="text-center text-2xl mb-4">WELCOME BACK</h1>
        <form className="space-y-5">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your Password"
            />{" "}
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
