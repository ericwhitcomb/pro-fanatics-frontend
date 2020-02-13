import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import './index.css';
import App from './App';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
