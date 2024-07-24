import React from "react";
import axios from "axios";
import "./App.css";

// Set withCredentials to true for all axios requests
axios.defaults.withCredentials = true;

function App() {
  const setCookie = async () => {
    try {
      const response = await axios.get("https://cookie-omega-six.vercel.app/set-cookie");
      if (response.status === 200) {
        alert("Cookie has been set");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const getCookie = async () => {
    try {
      const response = await axios.get("https://cookie-omega-six.vercel.app/get-cookie");
      if (response.status === 200) {
        alert(JSON.stringify(response.data));
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error getting cookie:", error);
    }
  };

  return (
    <div>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={getCookie}>Get Cookie</button>
    </div>
  );
}

export default App;
