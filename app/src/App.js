import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Jokes from './components/Cards/Jokes';

function App() {
  return (
    <div className="App">
      <Header />
      <Jokes />
    </div>
  );
}

export default App;
