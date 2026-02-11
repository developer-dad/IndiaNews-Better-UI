import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CurrentNews from "./components/CurrentNews";
import Toast from "./components/Toast";
import News from "./components/News";

function App() {
  return (
    <>
      <div className="relative mx-4 md:mx-28">
        {/* <div className="fixed inset-0 backdrop-blur-3xl"></div> */}

        <NavBar />
        <CurrentNews />
        <News country="in" category="top" q="bhilwara" />
        {/* <Toast/> */}
      
      </div>
    </>
  );
}

export default App;