import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Article.css';
import ArticleContent from '../ArticleContent/ArticleContent';

export const Article = ({ news }) => {
  const { id } = useParams();

  // Use the id parameter as the index to access the corresponding article
  const article = news[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, urlToImage, description, content } = article;

  return (
    <div className="article-container">
      <Link to="/">Home</Link>
      <h2 className="article-header">{title}</h2>
      {urlToImage && <img className="article-image" src={urlToImage} alt={title} />}
      <p className="article-description">{description}</p>
      <ArticleContent content={content} />
    </div>
  );
};

export default Article;
