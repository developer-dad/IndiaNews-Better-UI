import React, { useState } from "react";
import NavBar from "./components/NavBar_Component/NavBar";
import CurrentNews from "./components/CurrentNews";
import News from "./components/News";
import Toast from "./components/Toast";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [newsReady, setNewsReady] = useState(false);

  const allReady = backgroundReady && newsReady;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <img
        src="./background.jpg"
        alt="Background Image"
        className="fixed inset-0 object-cover object-left w-full h-full blur-xl scale-125 md:blur-2xl md:scale-150"
        onLoad={() => {
          setBackgroundReady(true);
        }}
      />

      {!allReady && <LoadingScreen/>}

      {/* Content Layer */}
        <div className="relative z-10 mx-4 md:mx-36">
          <NavBar />
          <CurrentNews />
          <News
            country="in"
            category="top"
            setNewsReady={setNewsReady}
            />
          {/* <Toast/> */}
        </div>

    </div>
  );
};

export default App;
