import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BACKEND_URL from "../api/url.js";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogIn = async (e) => {
    e.preventDefault();

    setError("")
    setLoading(true)

    const res = await BACKEND_URL.post('/user/login', {
      email,
      password
    })
    localStorage.setItem("token", res.data.accessToken)
    navigate('/')
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex justify-center items-center z-50">
      <div className="backdrop-blur-xl bg-white/20 text-white px-7 py-8 w-80 rounded-2xl border border-white/40">
        <h1 className="text-center text-2xl mb-4">WELCOME BACK</h1>
        <form className="space-y-3" onSubmit={handleLogIn}>
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
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 -translate-y-1/2 right-2.5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <p className="text-sm text-blue-400 underline float-right">
            Forget Password
          </p>
          <button
            type="submit"
            className="bg-blue-500/50 w-full py-1 rounded-lg mb-3"
          >
            {loading ? "Creating..." : "Log In"}
          </button>
        </form>
        <h3 className="text-center text-sm">
          Create a new account? <Link to='/signup' className="text-blue-400 underline">Sign Up</Link> 
        </h3>
      </div>
    </div>
  );
};

export default Login;
