import React, { Component } from 'react'
import './navigation.css'
import  'tachyons'

export default class Naiv extends Component {
  render() {
    return (
        <nav className="navbar bg-light-green f4">
            <h3 className="userName"> {sessionStorage.getItem('userName')}</h3>
             <a className="grow dim  pa2" href="http://localhost:3000/Login">Login</a>
            <a className="grow  dim pa2" href="http://localhost:3000/">Sign out</a>
        </nav>
      
    )
  }
}
