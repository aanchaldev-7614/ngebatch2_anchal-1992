import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedValue, setSelectedValue] = useState();

  async function getData() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <h1>Device List</h1>

      <select>
        {users.map((item) => (
          <option key={item.id}>{item.title}</option>
        ))}
      </select>

      <p className="result">LATEST: 67215293</p>
    </div>
  );
};

export default App;
