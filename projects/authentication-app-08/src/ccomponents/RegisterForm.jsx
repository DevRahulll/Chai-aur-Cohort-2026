import React, { useState } from "react";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "USER",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://api.freeapi.app/api/v1/users/register";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("Result: ", result);
    } catch (error) {
      console.log("Error in sending data");
    }

    setData("");
  };

  console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center justify-center min-h-60 max-w-96 mx-auto bg-gray-900 mt-2 p-6 rounded-md text-start "
      >
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>

        <div className="w-full mt-2 ">
          <label className="w-full text-xl">Email </label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            className="bg-gray-700 w-full text-white ml-1 rounded-md outline-none px-2 py-1 text-xl focus:ring-2 focus:ring-orange-400 placeholder:text-gray-500"
          />
        </div>

        <div className="w-full ">
          <label className="w-full text-xl">Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="bg-gray-700 w-full text-white ml-1 rounded-md outline-none px-2 py-1 text-xl focus:ring-2 focus:ring-orange-400 placeholder:text-gray-500"
          />
        </div>

        <div className="w-full mt-2">
          <label className="w-full text-xl">Username </label>
          <br />
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={data.username}
            onChange={handleChange}
            className="bg-gray-700 w-full text-white ml-1 rounded-md outline-none px-2 py-1 text-xl focus:ring-2 focus:ring-orange-400  placeholder:text-gray-500"
          />
        </div>

        <div className="w-full mt-2">
          <label className="text-xl block mb-1">Role</label>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <input
                id="user"
                name="role"
                type="radio"
                value="USER"
                checked={data.role === "USER"}
                onChange={handleChange}
                className="ml-1"
              />
              <label htmlFor="user" className="text-xl ml-1">
                User
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="admin"
                name="role"
                type="radio"
                value="ADMIN"
                checked={data.role === "ADMIN"}
                onChange={handleChange}
                className="ml-1"
              />
              <label htmlFor="admin" className="text-xl ml-1">
                Admin
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 mt-8 py-1 text-2xl font-semibold rounded-md hover:cursor-pointer active:scale-95 transition-all "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
