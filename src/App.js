import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Logo from './components/logo/logo';
import Nagigation from './components/naivbar/naiv'
import ImageFrom from './components/ImageLinkForm/ImageForm'
import Particles from 'react-particles-js'
import Rank from './components/Rank/Rank'

import  'tachyons'


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
  
  

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particals" params={particalsOption} 
        />
        <Nagigation/>
        <Logo/>
        <ImageFrom/>
        <Rank/>
      </div>
    )
  }
}

export default App;
