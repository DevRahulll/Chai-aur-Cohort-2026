import React, { useState } from "react";
import RegisterForm from "./ccomponents/RegisterForm";

function App() {
  const [tabs, setTabs] = useState("register");
  return (
    <div className="min-h-screen bg-black text-white p-10 flex ">
      {/* <h1 className="w-full text-2xl text-center font-bold text-orange-500">
        Chaicode Authentication
      </h1> */}
      <div className="bg-gray-800 min-h-screen border border-rose-400 min-w-72 items-start">
        <div className="flex flex-col items-start p-2">
          <button
            onClick=""
            className="w-full bg-orange-500 mt-8 py-1 text-2xl font-semibold rounded-md hover:cursor-pointer active:scale-95 transition-all "
          >
            Register
          </button>
          <button
            onClick=""
            className="w-full bg-orange-500 mt-8 py-1 text-2xl font-semibold rounded-md hover:cursor-pointer active:scale-95 transition-all "
          >
            Login
          </button>
        </div>
      </div>
      <div className="min-h-screen border border-yellow-200 min-w-screen">
        {tabs === "login" ? "Login" : <RegisterForm />}
      </div>
    </div>
  );
}

export default App;
