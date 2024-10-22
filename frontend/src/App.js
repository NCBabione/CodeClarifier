import './App.css';
import React, { useState } from "react";

function App() {
  const [inputTextareaValue, setInputTextareaValue] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputTextAreaChange = (e) => {
    setInputTextareaValue(e.target.value);
    setError(null);
  };

  const handleGenerateExplanation = async () => {
    if (!inputTextareaValue.trim()) {
      setError("Please enter some code to analyze");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/parse/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: inputTextareaValue
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate explanation');
      }

      const data = await response.json();
      setOutputText(data.ai_response);
    } catch (err) {
      setError(err.message);
      setOutputText("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeClarifier</h1>
        
        <div className="textarea-container">
          <textarea 
            className="left-aligned-textarea" 
            placeholder="Input Text Here"
            value={inputTextareaValue}
            onChange={handleInputTextAreaChange}
          ></textarea>
          
          <button 
            className="button1"
            onClick={handleGenerateExplanation}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate AI Explanation'}
          </button>
          
          <textarea 
            className="right-aligned-textarea" 
            placeholder="Output Generated Here"
            value={outputText}
            readOnly
          ></textarea>
        </div>

        {error && (
          <div style={{ color: 'red', marginTop: '1rem' }}>
            {error}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
