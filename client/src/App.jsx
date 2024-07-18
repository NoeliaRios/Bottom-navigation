import BottomNavigation from "../src/assets/components/BottomNavigation";
import Home from "../src/assets/components/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Home />
      <div className="rubik-uniquifier h-screen flex justify-center items-center bg-gris">
        <BottomNavigation />
      </div>
    </>
  );
};

export default App;
