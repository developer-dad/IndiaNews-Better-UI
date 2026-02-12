import React from "react";
import NavBar from './components/Navbar/NavBar'
import CurrentNews from "./components/CurrentNews";
import News from "./components/News";
import Toast from "./components/Toast";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Layer */}
      <div
        className="bg-[url(background.jpg)] absolute inset-0 bg-cover bg-top-left blur-xl scale-150 md:blur-3xl md:bg-cover"
      />

      {/* Content Layer */}
      <div className="relative z-10 mx-4">
        <NavBar />
        <CurrentNews/>
        <News country="in" category="top" />
        <Toast/>
      </div>

    </div>
  );
};


export default App;
