import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './home.css';

const Home = ({ news }) => {
  const [showDescription] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleArticleClick = (index) => {
    const filteredIndex = news.findIndex(
      (article) => article.title === filteredNews[index].title
    );
    return filteredIndex !== -1 ? filteredIndex : index;
  };

  const articleCards = filteredNews.map((article, index) => (
    <div className="article-card" key={index}>
      <Link to={`/article/${handleArticleClick(index)}`}>
        <h2 className="article-title">{article.title}</h2>
        {article.urlToImage && (
          <img
            className="article-image"
            id="article-pic"
            src={article.urlToImage}
            alt={article.title}
          />
        )}
        <p className="article-description">
          {showDescription && article.description
            ? article.description
            : article.description
            ? `${article.description.slice(0, 70)}...`
            : 'No description available'}
        </p>
      </Link>
    </div>
  ));

  return (
    <div className="home-container">
      <SearchBar news={news} onSearch={handleSearchChange} />
      <div className="articles-grid">{articleCards}</div>
    </div>
  );
};

export default Home;
