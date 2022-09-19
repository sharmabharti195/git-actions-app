import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const endpoint = "https://api.spacex.land/graphql/";
  const FILMS_QUERY = `{
    histories(limit: 5) {
      id
      title
      details
    }
  }`;

function App() {
  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: FILMS_QUERY })
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => data.data);
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
