import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/youtube/videos",
          { signal: controller.signal }
        );
        const result = await response.json();

        // console.log("Fetch : ", data.data.data)

        setPosts(result.data.data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(false)
        }
      }
    }
    loadPost();

    return () => {
      controller.abort()
    }
  }, []);

  if (loading) return <h2>Loading...</h2>

  return (
    <>
      <h1 className="text-center p-2 text-3xl text-orange-500 font-semibold ">FreeAPI: Youtube Videos Listing UI</h1>
      <div className="p-5 grid grid-cols-3 gap-5">
        {
          posts.map((video) => {
            const v = video.items?.snippet || video.snippet;

            const thumbnail = v?.thumbnails?.high?.url || v?.thumbnails?.medium?.url;

            const title = v?.title;

            const videoId = video.items?.id?.videoId || video.id?.videoId;

            const youtubeLink = `http://www.youtube.com/watch?v=${videoId}`;

            return (
              <a
                key={videoId}
                href={youtubeLink}
                target="_blank"
                className="cursor-pointer"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-white text-center text-sm font-semibold line-clamp-2">
                      {title}
                    </h2>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
