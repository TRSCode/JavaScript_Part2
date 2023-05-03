import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <h3>Instructions</h3>
    <p>Add to the url "/home" to get to the home page</p>
    <p>Add a number to url "/5" to get to the number page</p>
    <p>Add a word to url "/hello" to get the word page</p>
    <p>Add a color to url "/hello/yellow/black to change text and background</p>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
