import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Register from './components/Register/Register'

import  'tachyons'
import { Route, Link,Switch,  BrowserRouter as Router } from 'react-router-dom'  
import Login from './components/Login/login';

const routing =(
  <Router>
     <Switch>
    <Route  path="/login"  component={Login} />
    <Route  path="/home"  component={App} />
    <Route  path="/Register"  component={Register} />
    </Switch>
  </Router>
)






ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
