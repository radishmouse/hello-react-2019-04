
// Just like require() in your Node.js code
// "ES6 style imports" (as opposed to calling require() in Node.js)
import React from 'react';      // Pull in the React library itself
                                // Put this in every .js file in your project

import logo from './logo.svg';  // Import an image. (React will do optimizations.)
import './App.css';             // Recommendation: no individual style files. Just use index.css

import Greet from './Greet';
import Counter from './Counter';

// When you import, you're declaring a variable name
import ClickyCounter from './ClickyCounter';

// let badBadBad = 2;
// // NOooooooOOOoOOooOOoO!
// setInterval(() => {
//     badBadBad++
// }, 1000);
// "App" is a component.
// A component is a function that returns a React Element
// A React Element is a description of a DOM element (or tree).
// The most common way to specify a React Element is by using JSX.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickyCounter startAt={300} />        
        <ClickyCounter startAt={-42} />        
        <ClickyCounter />        

      </header>
    </div>
  );
}


// Equivalent to module.exports
export default App;
