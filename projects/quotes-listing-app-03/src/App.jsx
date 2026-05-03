import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadQuotes() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/quotes",
          { signal: controller.signal }
        );

        const result = await response.json();

        setQuotes(result.data.data);
        // console.log("Data", result.data.data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
          setLoading(false);
        }
      }
    }

    loadQuotes();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <h1 className="text-center text-3xl text-green-500 mt-10 ">Loading quotes...</h1>;
  }

  if (error) {
    return <h1 className="text-center mt-10 text-red-500">Something went wrong</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-10">
        ChaiCode Quote Gallery
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300"
          >
            <p className="text-white text-md leading-relaxed mb-4">
              “{quote.content}”
            </p>

            <p className="text-gray-300 text-right italic text-xs font-semibold">
              -- {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;