import React from "react";
import NavBar from './components/NavBar_Component/NavBar'
import CurrentNews from "./components/CurrentNews";
import News from "./components/News";
import Toast from "./components/Toast";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-fixed blur-xl scale-150 md:blur-3xl"
        style={{backgroundImage: "url('/background.jpg')"}}
      />

      {/* Content Layer */}
      <div className="relative z-10 mx-4">
        <NavBar />
        <CurrentNews/>
        <News country="in" category="top" />
        {/* <Toast/> */}
      </div>

    </div>
  );
};


export default App;
