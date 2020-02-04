import React from 'react';
import { Route } from 'react-router-dom';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import 'popper.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
    </>
  );
}

export default App;
