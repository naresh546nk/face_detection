import  React from 'react'
import './imageForm.css'

const ImageFrom  =({onChangeInput, onButtonSubmit}) => {
  
    return (
        <div>
            <div className="f4 tc">This magic brain will detecct the face of you image let try !</div>
    
            <div className="container1">
                <div className="inputbackground ma5">
                    <div className="f3 pa3">
                        <input  className="w-70 ma" type="text"  onChange={onChangeInput}/> 
                        <button  onClick={onButtonSubmit} className="w-30 grow dim link">Detect</button>
                    </div>  
                </div>

            </div>
        </div>
      
    )
  
}
export default  ImageFrom;
