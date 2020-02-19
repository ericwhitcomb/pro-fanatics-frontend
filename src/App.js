import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import HomePage from './components/pages/HomePage';
import MainPage from './components/pages/MainPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  return (
    <>
      <Route exact path="/" render={token === null ? (props) => <HomePage setToken={setToken} /> : (props) => <MainPage />} />
      <Route path="/signout" render={() => { localStorage.clear(); setToken(null); return <Redirect to="/" /> }} />
    </>
  )
}

export default App;
