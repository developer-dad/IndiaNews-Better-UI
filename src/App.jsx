import "./App.css";
import NavBar from "./components/NavBar";
import CurrentNews from "./components/CurrentNews";
import NewsItem from "./components/NewsItem";
import Toast from "./components/Toast";
import News from "./components/News";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 backdrop-blur-3xl -z-10"></div>

        <NavBar />
        <CurrentNews />
        {/* <NewsItem /> */}
        <News/>
        <Toast/>
      
      </div>
    </>
  );
}

export default App;
