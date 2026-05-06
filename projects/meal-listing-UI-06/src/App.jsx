import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMeals() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/meals",
          { signal: controller.signal }
        );

        const result = await response.json();
        setMeals(result.data.data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
          setLoading(false);
        }
      }
    }

    loadMeals();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-3xl text-green-500 font-bold animate-pulse">
          Loading Meals...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-red-500 text-2xl font-semibold">
          Something went wrong
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        ChaiCode Meal Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-center mb-3 text-white">
                {meal.strMeal}
              </h2>

              <p className="text-gray-400 mb-2">
                <span className="text-gray-200 font-semibold">Category:</span>{" "}
                {meal.strCategory}
              </p>

              <p className="text-gray-400 mb-4">
                <span className="text-gray-200 font-semibold">Area:</span>{" "}
                {meal.strArea}
              </p>

              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;