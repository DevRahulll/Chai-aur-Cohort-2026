import React, { useState } from 'react'
import "./App.css";

function App() {
  const [value,setValue]=useState(10);
  
  const increase=()=>{
    setValue(value+1); // not a good quality have an issue
  };

  const decrease=()=>{
    setValue(value-1);
  }


  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={increase}>Increment by 1</button>
      <button onClick={decrease}>decrement by 1</button>
    </div>
  )
}

export default App