import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [inputTextareaValue, setInputTextareaValue] = useState("");

  const handleinputTextAreaChange = (e) => {
    setInputTextareaValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>CodeClarifier</h1>
      
      <header className="App-header">
        

        
        <div className="textarea-container">
          <textarea 
            className="left-aligned-textarea" 
            placeholder="Input Text Here"
            value={inputTextareaValue}
            onChange={handleinputTextAreaChange}
          ></textarea>
          
          <button className="button1">
            Generate AI Explanation
          </button>
          
          <textarea className="right-aligned-textarea" placeholder="Output Generated Here"></textarea>
        </div>

        <div>
          <h3>Input Textarea Content:</h3>
          <p>{inputTextareaValue}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
