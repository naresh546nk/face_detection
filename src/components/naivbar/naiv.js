import React, { Component } from 'react'
import './navigation.css'
import  'tachyons'

export default class Naiv extends Component {
  render() {
    return (
        <nav className="navbar bg-light-green f4">
             <a className="grow dim  pa2" href="#">Login</a>
            <a className="grow  dim pa2" href="#">Sign out</a>
        </nav>
      
    )
  }
}
