import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Carousel from './components/carousel/index.js';

import Login from './pages/login/index.js';
import Register from './pages/register/index.js';

export default function App() {
  return (
    <div className="App">
      <div className="child painel-slide">
        <Carousel/>
      </div>
      <div className="child">
      <BrowserRouter>
        <Switch>
          <Route exact path="/registro" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}