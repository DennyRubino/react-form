import { useState } from "react";
import Article from "./assets/Data/ArticleData";

function App() {
  return (
    <div className="App">
      <h1>Lista Articoli</h1>
      <ul>
        {articlesData.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

import "./App.css";

export default App;
