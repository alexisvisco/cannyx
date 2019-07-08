import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { UltraCoolInterface } from "@canny-os/common";


const App: React.FC = () => {

  let a: UltraCoolInterface = {
    a: "yeah", b: 2
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload {a.a} {a.b}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
