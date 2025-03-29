import React, { useState } from 'react';

function SentimentForm({ onAnalyze }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnalyze(text); // Lähetetään teksti analysoitavaksi
  };

  return (
    <div className="sentiment-form">
      <h2>Enter Text for Sentiment Analysis</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
        />
        <button type="submit">Analyze</button>
      </form>
    </div>
  );
}

export default SentimentForm;
