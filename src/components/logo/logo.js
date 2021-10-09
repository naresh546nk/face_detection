import React, {Component} from 'react'
import brain from './brain.jpg'
import Tilt from 'react-tilt'

import './logo.css'



export default class Logo extends Component {
  render() {
    return (
        <div >

<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner tc ma2 pa4">  
 <img alt="logo" src={brain} height="150px" width="200px"/>
  </div>
</Tilt>
           
        </div>
    )
  }
}
