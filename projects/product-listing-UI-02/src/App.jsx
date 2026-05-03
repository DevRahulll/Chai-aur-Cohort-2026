import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomproducts",
          { signal: controller.signal }
        );

        const result = await response.json();

        setProduct(result.data.data);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <h1 className="text-center text-green-500 text-2xl mt-10">Loading products...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
        🛒 Chai-Code Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.length > 0 ? (
          product.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>


                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    ₹{item.price}
                  </span>

                  <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="col-span-full text-center text-xl">
            No products found
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;