import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadJokes() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomjokes",
          { signal: controller.signal }
        );

        const result = await response.json();

        setJokes(result.data.data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
          setLoading(false);
        }
      }
    }

    loadJokes();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-3xl text-green-500 mt-10">
        Loading jokes...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        Something went wrong
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-900 p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-10">
        ChaiCode Jokes Section
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-orange-200"
          >
            <p className="text-xs text-orange-400 mb-2">
              Joke #{joke.id}
            </p>

            <p className="text-gray-800 text-md leading-relaxed">
              {joke.content}
            </p>

            <div className="mt-4 h-1 w-10 bg-orange-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;