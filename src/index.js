import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: '20'},
    {id: 2, message: 'Hi', likesCount: '30'}
]

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Slava'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hi yo'}
];





ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages} />




  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


