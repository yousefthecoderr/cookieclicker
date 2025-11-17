import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const cookie = useRef<HTMLImageElement>(null);

  function bumpHeight () {
    cookie.current?.setAttribute("width", "356");

    setTimeout(() => {
      cookie.current?.setAttribute("width", "256");
    }, 100)
  }

  useEffect(() => {
    document.addEventListener("keydown", (ev) => {
      if (ev.key.toLowerCase() == "space") {
        setCount(count + 1);
        bumpHeight();
      }
    })
  }, [])

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
    }}>
      <img  className="cookie" src="https://static.vecteezy.com/system/resources/previews/027/291/607/non_2x/cookie-isolated-on-transparent-background-free-png.png" width="256" ref={cookie} onClick={() => {bumpHeight(); setCount(count + 1)}} alt="cookie"/>
      <span>Count: {count}</span>
    </div>
  )
}

export default App
