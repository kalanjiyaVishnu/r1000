import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './login';
import Register from './register';
import Home from './home';
import Notfound from './Notfound';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
const routing=(

  <Router>
  <div>
  <Switch>
  <Route path="/home" component={Home}/>
  <Route exact path="/login-page" component={Login}/>
  <Route path="/register-page" component={Register}/>
  <Route component={Notfound}/>
  </Switch>
  </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));