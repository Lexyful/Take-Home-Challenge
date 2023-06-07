// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';
import Article from '../Article/Article';

function App() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=de3a760de2e04da09f3a61de9a7429e2')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching news');
        }
      })
      .then(data => {
        setNews(data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleArticleClick = (index) => {
    setSelectedNews(news[index]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home news={news} onArticleClick={handleArticleClick} />}
        />
        <Route path="/article/:id" element={<Article news={news} />} />
      </Routes>
    </div>
  );
}

export default App;