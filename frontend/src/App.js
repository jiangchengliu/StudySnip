import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ImportBox } from './Components/ImportBox.js';

function App() {
  const [open, setOpen] = useState(false) 

  return (
    <div className="App">
    <header className="App-header">
      <h1>Video Upload</h1>
    </header>
    <main>
      <button onClick={() => setOpen(true)}>Upload Video</button>
      <ImportBox open={open} onClose={() => setOpen(false)}/>
    </main>
  </div>
  );
}

export default App;
