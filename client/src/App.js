import './App.css';
import {useState, useEffect} from 'react'

function url(path){
  return process.env.NODE_ENV === "development" 
  ? `http://localhost:1234${path}` : path
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Cool API data incoming soon
      </header>
    </div>
  );
}

export default App;
