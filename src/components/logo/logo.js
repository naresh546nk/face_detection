import React, {Component} from 'react'
import brain from './brain.jpg'
import Tilt from 'react-tilt'

import './logo.css'



export default class Logo extends Component {
  render() {
    return (
        <div >

        <Tilt className="Tilt br2 shadow-2 bg-light-pink" options={{ max : 25 }} style={{ height: 140, width: 190 }} >
        <div className="Tilt-inner pl3 pt2">  
        <img alt="logo" src={brain} height="120px" width="150px"/>
          </div>
        </Tilt>
           
        </div>
    )
  }
}
