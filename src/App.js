import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <div>
          <Home />
          <Footer />
        </div>

      </Navbar>
    </div>
  );
}

export default App;
