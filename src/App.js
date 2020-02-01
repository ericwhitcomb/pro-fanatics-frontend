import React from 'react';
import { Route } from 'react-router-dom';
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
