import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//This is the very entry point of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* We are rendering the app component here, which in turn is a collection of many smaller components */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

