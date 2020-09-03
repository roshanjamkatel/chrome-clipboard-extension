import React from 'react';
import './App.css';

function myFunction() {
  var copyText = document.getElementById("input");

  copyText.querySelector();
  copyText.setSelectionRange(0, 99999); 

  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


function App() {
  return (
    <div className="App">
        <div className="clip-logo">
          <img src="logo-small.png" alt="logo" />
        </div>
        <header className="App-header">
        <p>
          Quick and easy access clipboard at your service!
        </p>

        <form>
        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />

        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />
        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />
        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />
        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />
        <input 
        type="text" 
        defaultValue="" 
        id="input"
        autoComplete = "off"
        />
        </form>
        
      </header>
    </div>
  );
}

export default App;
