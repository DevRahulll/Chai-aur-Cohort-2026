import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      setLoading(true);

      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomusers",
          { signal: controller.signal }
        );

        const result = await response.json();
        setUsers(result.data.data);

        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setErrors(error);
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex justify-center items-center">
        <h1 className="text-4xl font-bold text-cyan-400 animate-pulse">
          Loading Users...
        </h1>
      </div>
    );
  }

  if (errors) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-red-500 text-3xl font-bold">
          Failed to load users
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 text-white px-6 py-10">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          Chaicode Users
        </h1>

        <p className="text-gray-400 mt-3">
          Disclamer: This are random users
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl hover:-translate-y-2 hover:shadow-cyan-500/20 transition duration-300"
          >
            <div className="flex items-center gap-5">
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  {user.name.first} {user.name.last}
                </h2>

                <p className="text-cyan-300 text-sm mt-1">
                  {user.login.username}
                </p>

                <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400">
                  {user.gender}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-gray-300">
              <p>
                Email: <span className="text-white">{user.email}</span>
              </p>

              <p>
                Contact:  <span className="text-white">{user.phone}</span>
              </p>

              <p>
                Country: {" "}
                <span className="text-white">
                  {user.location.city}, {user.location.country}
                </span>
              </p>

              <p>
                Age: <span className="text-white">{user.dob.age} Years Old</span>
              </p>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition duration-300">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;