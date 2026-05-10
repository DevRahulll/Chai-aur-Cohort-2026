import React from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  console.log(`${import.meta.env.VITE_API_URL}`);
  return (
    <div>
      <h1>Welcome to raw react!</h1>
    </div>
  );
};

export default App;
