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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
        <div className="textarea-container">
          <textarea 
            className="left-aligned-textarea" 
            placeholder="Input Text Here"
            value={inputTextareaValue}
            onChange={handleinputTextAreaChange}
          ></textarea>
          
          
          
          <textarea className="right-aligned-textarea" placeholder="Output Generated Here"></textarea>
        </div>

        <div className="output">
          <h3>Input Textarea Content:</h3>
          <p>{inputTextareaValue}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
