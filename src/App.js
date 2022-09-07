import logo from './logo.svg';
import './App.css';
import { Button } from '@material-tailwind/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          vroomX From Heezol
        </a>
        <h1 className='text-5xl'>hello from tailwind</h1>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
