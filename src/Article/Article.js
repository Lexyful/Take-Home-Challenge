import React from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import ArticleContent from '../ArticleContent/ArticleContent';

const Article = ({ news }) => {
  const { id } = useParams();
  const article = news[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  const { title, urlToImage, content, publishedAt } = article;

  return (
    <div className="article-container">
        

      <div className="article-contents">

        <h2 className="article-header">{title}</h2>
        {urlToImage && <img className="article-image" src={urlToImage} alt={title} />}
        <p className="article-publishedAt">Published at: {publishedAt}</p>
        <ArticleContent content={content} />
      </div>
    </div>
  );
};

export default Article;
