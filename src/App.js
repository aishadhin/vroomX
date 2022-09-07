import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
      </Navbar>
    </div>
  );
}

export default App;
