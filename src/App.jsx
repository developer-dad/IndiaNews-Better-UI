import React, { useState } from "react";
import NavBar from "./components/NavBar_Component/NavBar";
import CurrentNews from "./components/CurrentNews";
import News from "./components/News";
import LoadingScreen from "./components/LoadingScreen";
import Toast from "./components/Toast"

const App = () => {
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [country, setCountry] = useState("in");
  const [countryName, setCountryName] = useState("India");
  const [category, setCategory] = useState("top");
  const [categoryName, setCategoryName] = useState("Top");
  const [q, setQ] = useState(null);

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

      {!backgroundReady && <LoadingScreen />}

      {/* Content Layer */}
      <div className="relative z-10 mx-4 md:mx-36">
        <NavBar
          setCountry={setCountry}
          setCategory={setCategory}
          setQ={setQ}
          setCountryName={setCountryName}
          setCategoryName={setCategoryName}
        />
        <CurrentNews countryName={countryName} categoryName={categoryName} q={q} />
        <News country={country} category={category} q={q} setCountry={setCountry} setCategory={setCategory} setQ={setQ} />
        <Toast countryName={countryName} categoryName={categoryName} q={q}/>
      </div>
    </div>
  );
};

export default App;
