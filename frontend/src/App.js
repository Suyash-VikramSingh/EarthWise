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
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">Frontend Connected!</h1>
      <p className="mt-4 text-lg">Message from backend: {message}</p>
    </div>
  );
}

export default App;
