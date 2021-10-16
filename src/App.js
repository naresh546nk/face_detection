import React,{Component} from 'react';
import Clarifai from 'clarifai'
import './index.css';
import ImageFrom from './components/ImageLinkForm/ImageForm'
import Rank from './components/Rank/Rank'
import FaceDetection from './components/FaceDetection/FaceDetection'
import Logo from './components/logo/logo';
import  'tachyons'

const app=new Clarifai.App({
    apiKey:'d6c9b8382af8453db2368280bcbd6572'
});


  

class App extends Component {
    constructor(){
        super();
        this.state={
            input:'',
            imageUrl:'',
            box:{}
         //to store the canvas details
             
        }
    }

 onChangeInput = (event) =>{
    this.setState({input:event.target.value})
     //console.log(event.target.value)
 }






 calculateFaceLocation = (data) => {
     console.log("calculatingFaceLoaction :",data)
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log("setting data to box :", box)
    this.setState({box: box});
    console.log("Value set in box checkign ... : ",this.state.box)
  }







 onButtonSubmit =() =>{
     console.log("click");
     this.setState({imageUrl: this.state.input})

     app.models
     .predict(
       Clarifai.FACE_DETECT_MODEL,
       this.state.input)
     .then(response => {
       console.log('hi', response)
       this.displayFaceBox(this.calculateFaceLocation(response))
     })
     .catch(err => console.log(err));
 }


  //https://samples.clarifai.com/face-det.jpg
 



  render() {
    return (
      <div>
        <Logo/>
        <ImageFrom  
        onButtonSubmit={this.onButtonSubmit}
        onChangeInput={this.onChangeInput}/>
        <Rank/>
        <FaceDetection imageUrl={this.state.imageUrl} box={this.state.box}/>
        
      </div>
    )
  }
}

export default App;
