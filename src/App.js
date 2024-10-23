import React, { useState, useEffect } from "react";
import { createDirectus, rest, readItems } from "@directus/sdk";

const client = createDirectus("http://localhost:8000/directus").with(rest());

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.request(readItems("news"));
        setArticles(response);
      } catch (error) {
        console.error("Error fetching data from Directus:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
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
*/
