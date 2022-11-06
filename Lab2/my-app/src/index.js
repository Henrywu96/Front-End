import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeter from './components/Greeter';
import reportWebVitals from './reportWebVitals';
import LikeButton from './components/LikeButton';
import Display from './components/Display';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Display />
      <Counter />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
