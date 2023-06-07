// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import SearchBar from '../SearchBar/SearchBar';

function Home({ news }) {
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSearch = (query) => {
    const filteredArticles = news.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filteredArticles);
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Latest News</h1>
      <SearchBar news={news} onSearch={handleSearch} />
      <div className="articles-grid">
        {filteredNews.map((article, index) => (
          <Link to={`/article/${index}`} key={index} className="article-card">
            {article.urlToImage && (
              <img className="article-image" src={article.urlToImage} alt={article.title} />
            )}
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
