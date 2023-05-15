import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import "normalize.css"
import "./assets/css/index.css"

// @ => src: webpack.config.js
// react默认隐藏了webpack

// 解决 craco


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);