import "./App.css";
import { useEffect, useState } from "react";

const endpoint = "https://api.spacex.land/graphql/";
const FILMS_QUERY = `{
    histories(limit: 13) {
      id
      title
      details
    }
  }`;

function App() {
  const [historyArr, setHistory] = useState([]);
  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: FILMS_QUERY }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => setHistory(data.data.histories));
  }, []);

  return (
    <div className="App">
      <h1>Git Actions in Action</h1>

      {historyArr.map((ele) => {
        return <p>{ele.title}</p>;
      })}
    </div>
  );
}

export default App;
