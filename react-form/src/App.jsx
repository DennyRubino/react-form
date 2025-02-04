import React from "react";
import articlesData from "./assets/Data/ArticleData";
import "./App.css";

function App() {
  return (
    <div className="App container-app">
      <h1>Lista Articoli</h1>
      <ul>
        {articlesData.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
