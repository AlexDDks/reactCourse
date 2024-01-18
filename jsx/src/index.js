// 1 Import the React and ReactDOM libraries
import React from 'react'; // Imports the React library, which is necessary for using React components.
import ReactDOM from 'react-dom/client'; // Imports ReactDOM from 'react-dom/client', used for rendering components to the DOM.
import App from "./App"; // Imports the App component from the App.js file.


// 2 Get a reference to the div with ID root
const el = document.getElementById('root'); // Accesses the DOM to find the element with the ID 'root'.

// 3 Tell React to take control of that element
const root = ReactDOM.createRoot(el); // Creates a root node for React to manage, using the 'root' DOM element.

// 4 Show the component on the screen
root.render(<App/>) // Instructs React to render the App component inside the root element.
