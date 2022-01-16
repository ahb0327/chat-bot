import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IoProvider from '../node_modules/socket.io-react-hook/lib/cjs/IoProvider.d';

ReactDOM.render(
  <React.StrictMode>
    <IoProvider>
      <App />
    </IoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
