import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home({ news }) {
  return (
    <div className="home-container">
      <h1 className="home-header">Latest News</h1>
      <div className="articles-grid">
        {news.map((article, index) => (
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
