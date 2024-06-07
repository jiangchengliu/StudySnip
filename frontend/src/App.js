import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ImportBox } from './Components/ImportBox.js';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Video Upload</h1>
    </header>
    <main>
      <ImportBox />
    </main>
  </div>
  );
}

export default App;
