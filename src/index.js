import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Logo from './components/logo/logo';
import Nagigation from './components/naivbar/naiv'
import ImageFrom from './components/ImageLinkForm/ImageForm'

import  'tachyons'



ReactDOM.render(
  <React.StrictMode>
    <div>
    <Nagigation/>
    <Logo/>
    <ImageFrom/>
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
