import { useEffect, useState } from "react";

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCat = async (signal) => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
        { signal }
      );

      const result = await response.json();
      setCat(result.data);
      // console.log(result)
      setLoading(false);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchCat(controller.signal);

    return () => controller.abort();
  }, []);

  const handleNewCat = () => {
    const controller = new AbortController();
    fetchCat(controller.signal);
  };

  if (loading) {
    return (
      <h1 className="text-center mt-10 text-3xl text-green-500">
        Loading cat...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        Failed to load cat
      </h1>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="bg-white rounded-2xl shadow-xl p-5 w-[320px] text-center">
        <h1 className="text-xl font-bold text-orange-600 mb-4">
          Random Cat Viewer
        </h1>

        {cat && (
          <>
            <img
              src={cat.image}
              alt="Random Cat"
              className="w-full h-64 object-cover rounded-xl"
            />

            <p className="mt-3 font-semibold text-xl text-gray-700">
              {cat.name}
            </p>
            <p className="mt-3 text-sm text-gray-600 muted">
              {cat.description}
            </p>

            <button
              onClick={handleNewCat}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Show Another Cat
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;