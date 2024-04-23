import "./style.css";
import React, { useState, useEffect } from "react";

function App() {
  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respon) => respon.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <div className="badan">
      {alldata.map((dats) => (
        <div className="App">
          <h3>{dats.name}</h3>
          <h3>{dats.email}</h3>
          <h3>{dats.website}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
