import React, { useState } from 'react';

const MAX_CHARACTERS = 200; // Maximum number of characters to display initially

const ArticleContent = ({ content }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const truncatedContent = showMore ? content : content.slice(0, MAX_CHARACTERS);
  const showToggle = content.length > MAX_CHARACTERS;

  return (
    <div>
      <p>{truncatedContent}</p>
      {showToggle && (
        <button onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ArticleContent;