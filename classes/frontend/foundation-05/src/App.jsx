import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Labs from './Labs';

function App() {
  const[posts,setPosts]=useState([])
  const[status, setStatus]=useState('idle');
  const[seconds, setSeconds]=useState(10);

  useEffect(()=>{
    const timerId=setInterval(()=>{
      setSeconds((current)=>Math.max(current-1,0));
    },1000);

    return ()=>{
      clearInterval(timerId)
    }
  },[])

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal }
        );
        const data = await response.json();
        setPosts(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setStatus("error");
        }
      }
    }
    loadPost();


    return () => {
      controller.abort()
    }
  }, []);

  return (
    <>
      <div className="counter">
        {/* {seconds} */}
        <Labs/>
      </div>
    </>
  )
}

export default App
