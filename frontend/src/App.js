import './App.css';
import React, {useState} from "react"



function App() {
  const [inputTextareaValue, setInputTextareaValue] = useState("");
  /*const [outputTextareaValue, setOutputTextareaValue] = "Hello, you pressed the button!!!";*/

  const handleinputTextAreaChange = (e) => {
    setInputTextareaValue(e.target.value);
  }

  const handleButtonPress = () => {
    var outputBox = document.getElementById("output");
    outputBox.value = "Pass API data into this value";
    /*setOutputTextareaValue(e.target.value);*/
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
          
          <button 
            className="button1"
            onClick={handleButtonPress}
          >Generate AI Explanation</button>
          
          <textarea className="right-aligned-textarea" placeholder="Output Generated Here" id="output">outputTextareaValue</textarea>
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
