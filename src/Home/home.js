import React from 'react';
import './home.css'

function Home({ news }) {
  return (
    <div className="home-container">
      <h2 className="home-header">Latest News</h2>
      {news.map((article, index) => (
        <div className="article" key={index}>
          {article.urlToImage && (
            <img className="article-image" src={article.urlToImage} alt={article.title} />
          )}
          <h3 className="article-title">{article.title}</h3>
          <p className="article-description">{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
