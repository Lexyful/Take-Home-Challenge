import React, { useState } from 'react';
import './ArticleContent.css'

const MAX_CHARACTERS = 200;

const ArticleContent = ({ content }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (content === null) {
    return <p>No content available</p>;
  }

  const truncatedContent = showMore ? content : content.slice(0, MAX_CHARACTERS);
  const showToggle = content.length > MAX_CHARACTERS;

  return (
    <div>
      <p>{truncatedContent}</p>
      {showToggle && (
        <button id="show-button" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ArticleContent;
