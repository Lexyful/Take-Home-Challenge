import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=theonion.com&language=en&from=2023-05-15&apiKey=de3a760de2e04da09f3a61de9a7429e2')
      .then(response => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        }
      })
      .then(data => {
        // Handle the fetched data
      })
      .catch(error => {
        // Handle the error
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>

    </div>
  );
}

export default App;
