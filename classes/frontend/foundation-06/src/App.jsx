import React, { useState } from 'react'
import "./App.css"
import ManualForm from './ManualForm';

function App() {
  const[tabs,setTabs]=useState("manual")
  return (
    <div>
      <h1>Form in React</h1>
      <div>
        {tabs==="manual"?(<ManualForm/>):("No form")}
      </div>
    </div>
  )
}

export default App;