import React, { useEffect } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import BACKEND_URL from "../api/url";

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSignUp = async (e) => {
      e.preventDefault()

      setError("")
      setLoading(true)

      const res = await BACKEND_URL.post('/user/signup/', {
        name: name.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        password
      })

      localStorage.setItem("token", res.accessToken)
      window.location.href = '/'
      setLoading(false)
    }

    const getTime = () => {
        const hour = new Date().getHours()
        let time = ""
        if(hour < 12){
            time = "Good Morning!"
        }else if(hour >= 12 && hour <= 18){
            time = "Good Afternoon!"
        }else{
            time = "Good Evening!"
        }
        return time
    }

  return (
    <div className="min-h-screen flex justify-center items-center z-50">
      <div className="backdrop-blur-xl bg-white/20 text-white px-7 py-8 w-80 rounded-2xl border border-white/40">
        <h1 className="text-center text-2xl mb-4">Hello, {getTime()}</h1>
        <form className="space-y-3" onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="border border-white/45 rounded-lg px-3 py-1"
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
          <button
            type="submit"
            className="bg-blue-500/50 w-full py-1 rounded-lg mb-3"
          >
            {loading ? "Creating..." : "Sign In"}
          </button>
        </form>
        <h3 className="text-center text-sm">
          Already a member? {" "}
          <Link to='/login' className="text-blue-400 underline">LogIn</Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
