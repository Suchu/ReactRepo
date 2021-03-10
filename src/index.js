import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//Creating first element
const element = <h1 className = "testClass">Welcome to React Programming...</h1>;
ReactDOM.render(element,document.getElementById("root"));

//Creating second element
const newelement = <h1 className = "testClass">Understanding the creation of the element in React</h1>;
ReactDOM.render(newelement,document.getElementById("app"));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
