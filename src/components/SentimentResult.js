import React from 'react';

// tekstin analysoimisen komponentti

function SentimentResult({ sentiment, score }) {
  return (
    <div className="sentiment-result">
      <h3>Sentiment Analysis Result</h3>
      <p>Sentiment: {sentiment}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default SentimentResult;