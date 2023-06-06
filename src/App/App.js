import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';

function App() {
  const [news, setNews] = useState([]);

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

  return (
    <div>
      <h1>News App</h1>
      <Routes>
        <Route exact path="/" element={<Home news={news} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
