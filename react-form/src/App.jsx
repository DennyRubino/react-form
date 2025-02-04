import React, { useState } from "react";
import articlesData from "./assets/Data/ArticleData";
import "./App.css";

function App() {
  const [articles, setArticles] = useState(articlesData);
  const [newArticleTitle, setNewArticleTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = { id: Date.now(), title: newArticleTitle };
    setArticles([...articles, newArticle]);
    setNewArticleTitle("");
  };

  return (
    <div className="App">
      <h1>Lista Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
          </li>
        ))}
      </ul>

      <h2>Aggiungi un nuovo articolo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo dell'articolo"
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
    </div>
  );
}

export default App;
