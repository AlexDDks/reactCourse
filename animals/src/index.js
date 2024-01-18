import React from "react"; // Essential React import for component use.
import ReactDOM from "react-dom/client"; // Imports ReactDOM for web rendering.
import App from "./App"; // Brings in the main App component.

const el = document.getElementById("root"); // Finds the page's root div.
const root = ReactDOM.createRoot(el); // Initializes React's control over that div.

root.render(<App />); // Renders the App component into the root div.
