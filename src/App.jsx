import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [ipAddress, setIpAddress] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");

        if (!response.ok) {
          throw new Error("Failed to fetch IP address");
        }

        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        setError("Unable to retrieve IP address");
        console.error("IP fetch error:", err);
      }
    };

    fetchIPAddress();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>revision 0</p>
      </div>
      <p className="read-the-docs">
        {error ? error : `Your IP address is: ${ipAddress}`}
      </p>
    </>
  );
}

export default App;
