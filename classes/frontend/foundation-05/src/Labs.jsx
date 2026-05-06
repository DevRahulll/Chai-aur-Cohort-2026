import { useState } from "react";

function Labs() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setItems(...items, inputValue);
    setInputValue('');
  }

  function ListItem(){
    return(
      <ul id="item-list">
        {items.map((item)=>(
        <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <div>
      {/* Add input, button, and list here */}
      <input id="item-input" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button id="add-btn" onClick={handleSubmit}>Add </button>
      <ListItem/>
    </div>
  );
}

export default Labs;