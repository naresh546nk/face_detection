import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Register from './components/Register/Register'

import  'tachyons'
import { Route, Link,Switch,  BrowserRouter as Router } from 'react-router-dom'  
import Login from './components/Login/login';
import Nagigation from './components/naivbar/naiv'
import Particles from 'react-particles-js'



const particalsOption={
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000,
      }
    }
  }

}




ReactDOM.render(
  <Router>
    <div>
      <Nagigation />
      <Particles className="particals" params={particalsOption} 
        />
        <Switch>
        <Route exect  path="/login"  component={Login} />
        <Route exect path="/home"  component={App} />
        <Route exect path="/Register"  component={Register} />
        <Route   path="/"  component={Login} />
        </Switch>
    </div>
</Router>,
  document.getElementById('root')

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
