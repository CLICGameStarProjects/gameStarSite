import React, { useState, useEffect } from "react";
import { createDirectus, rest, readItems } from "@directus/sdk";
import Navbar from "./partials/navbar.js";
import Home from "./pages/home.js";
import Footer from "./partials/footer.js";

const client = createDirectus(
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/directus"
    : "https://clic.epfl.ch/directus"
).with(rest());

const collections = ['gamestar_events']; // List each collection you want to query

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = {}
        const responses = await Promise.all(
          collections.map(async (collection) => {
            const response = await client.request(readItems(collection));
            results[collection] = response; // Store the data with collection name as key
          })
        );
        setArticles(results);
      } catch (error) {
        console.error("Error fetching data from Directus:", error);
      }
    };

    fetchData();
  }, []);

  if(articles.length !== 0) {
    return (
      <div className="App">
        <Navbar/>
        <Home events={articles.gamestar_events}/>
        <Footer/>
      </div>
    );
  }

  return (
    <div>
      <h1>Articles test</h1>
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
