import  React, { Component } from 'react'
import './imageForm.css'

export default class ImageFrom  extends Component {
  render() {
    return (
        <div>
            <div className="f4 tc">This magic brain will detecct the face of you image let try !</div>
    
            <div className="container">
                <div className="inputbackground ma5">
                    <div className="f3 pa3 form">
                        <input  className="w-70 ma" type="text" /> 
                        <button  className="w-30 grow dim link">Detect</button>
                    </div>  
                </div>

            </div>
        </div>
      
    )
  }
}
