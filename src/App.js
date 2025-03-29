import React, { useState } from 'react';
import SentimentForm from './components/SentimentForm';
import SentimentResult from './components/SentimentResult';
import './styles/App.css';

// tässä vahingossa vähän turhaa koodausta, koska ei ole backendia, mutta sen lisäisi helposti

function App() {
  const [sentiment, setSentiment] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (text) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://example.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setSentiment(data.sentiment);
      setScore(data.score);
    } catch (err) {
      setError('An error occurred while analyzing the sentiment.');
    } finally {
      setLoading(false);
    }
  };

  // ja tässä se oikeasti tähän assignmenttiin relevantti osuus:

  return (
    <div className="App">
      <h1>Sentiment Analysis</h1>
      <SentimentForm onAnalyze={handleAnalyze} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {sentiment && <SentimentResult sentiment={sentiment} score={score} />}
    </div>
  );
}

export default App;