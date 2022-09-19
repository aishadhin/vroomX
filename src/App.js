import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Home />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
