import React, { useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SavedNews from "./pages/SavedNews";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";

const App = () => {
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <img
        src="/background.jpg"
        alt="Background Image"
        className="fixed inset-0 object-cover object-left w-full h-full blur-xl scale-125 md:blur-2xl md:scale-150"
        onLoad={() => {
          setBackgroundReady(true);
        }}
      /> 

      {/* !backgroundReady && <LoadingScreen /> */}

{/* Content Layer */}
      <div className="relative z-10 mx-4 md:mx-36">
        <Routes>
          <Route path="/" element={<Home auth={isAuth} setAuth={setIsAuth}/>} />
          <Route path="/login" element={isAuth ? <Home auth={isAuth} setAuth={setIsAuth} /> : <Login />} />
          <Route path="/signup" element={isAuth ? <Home auth={isAuth} setAuth={setIsAuth} /> : <SignUp />} />
          <Route path="/forget-password" element={<PasswordReset />}/>
          <Route path="/savednews" element={
            isAuth ? <SavedNews /> : <Navigate to={'/login'} />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
