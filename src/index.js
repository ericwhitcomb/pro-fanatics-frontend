import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import './index.css';
import App from './App';

dotenv.config();

console.log('index.js:' + process.env.NODE_ENV);

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.BACKEND_URL
    : 'http://localhost:4000/api';

console.log('index.js:' + axios.defaults.baseURL);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
