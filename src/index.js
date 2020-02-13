import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import './index.css';
import App from './App';

dotenv.config();

console.log('index.js:' + process.env.NODE_ENV);

console.log('index.js:' + process.env.REACT_APP_BACKEND_URL);

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

console.log('index.js:' + axios.defaults.baseURL);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
