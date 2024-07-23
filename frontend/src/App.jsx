import axios from 'axios';
import "./App.css";

function App() {
  const setCookie = async () => {
    try {
      await axios.get("https://cookie-omega-six.vercel.app/set-cookie", {
        withCredentials: true,
      });
      alert("Cookie has been set");
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  };

  const getCookie = async () => {
    try {
      const response = await axios.get(
        "https://cookie-omega-six.vercel.app/get-cookie",
        { withCredentials: true }
      );
      alert(response.data);
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
