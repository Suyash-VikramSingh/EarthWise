import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Notice: we only use "/api/hello", not full backend URL
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching API:", err));
  }, []);

  return (
    <div className="p-6 bg-green-100 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">Hello, Team!!</h1>
      <h1 className="text-3xl font-bold text-green-600">This is EarthWise.</h1>
      <h1 className="mt-4 text-lg">Frontend Connected!</h1>
      <p className="mt-4 text-lg">Message from backend: {message}</p>
    </div>
  );
}

export default App;
