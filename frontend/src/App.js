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
        <h1>CodeClarifier</h1>
      </header>

      <body>
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
        
        
      </body>

      <div>
          <h3 className={"header3"}>Debug Area: Input Textarea Content:</h3>
          <p className={"paragraph"}>{inputTextareaValue}</p>
      </div>

    </div>
  );
}

export default App;
