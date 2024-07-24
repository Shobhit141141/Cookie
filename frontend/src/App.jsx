import "./App.css";

function App() {
  const setCookie = async () => {
    try {
      const response = await fetch("https://cookie-omega-six.vercel.app/set-cookie", {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
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
      const response = await fetch("https://cookie-omega-six.vercel.app/get-cookie", {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        alert(data);
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
