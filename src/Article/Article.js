import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Article.css';

export const Article = ({ news }) => {
    const { id } = useParams();

    // Find the article with the matching ID
    const article = news[id];

    if (!article) {
      return <div>Article not found</div>;
    }
  
    return (
      <div className="article-container">
        <Link to="/">Home</Link>
        <h2 className="article-header">{article.title}</h2>
        <img className="article-image" src={article.urlToImage} alt={article.title} />
        <p className="article-description">{article.description}</p>
        <p className="article-content">{article.content}</p>
      </div>
    );
  }
  
  export default Article;
