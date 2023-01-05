import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

 

function App() {

  const[counter, setCounter]=useState(0);
  function increment(){
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <h1>Counter application</h1>
      
      <br></br>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>


    </div>
  );
}

export default App;
