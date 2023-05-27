import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from './store';

import App from '@/App';
import 'antd/dist/reset.css';
import "normalize.css"
import "./assets/css/index.less"

// @ => src: webpack.config.js
// react默认隐藏了webpack

// 解决方式 使用craco


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // Suspense 解决组件异步加载时，可能出现的问题
    <Suspense fallback="loading...">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  // </React.StrictMode>
);
