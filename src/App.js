import React,{Component} from 'react';
import Clarifai from 'clarifai'
import './index.css';
import ImageFrom from './components/ImageLinkForm/ImageForm'
import Rank from './components/Rank/Rank'
import FaceDetection from './components/FaceDetection/FaceDetection'
import Logo from './components/logo/logo';
import Nagigation from './components/naivbar/naiv'
import Particles from 'react-particles-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  'tachyons'






const app=new Clarifai.App({
    apiKey:'d6c9b8382af8453db2368280bcbd6572'
});





class App extends Component  {
    constructor(props){
        super(props)
        this.state={
            input:'',
            imageUrl:'',
            box:{}

             
        }    
    }
  componentWillMount(){
    if(!this.props.location.state){
      this.props.history.push("/login")
     }
  }


  

 onChangeInput = (event) =>{
    this.setState({input:event.target.value})
  
 }






 calculateFaceLocation = (data) => {
     //console.log("calculatingFaceLoaction :",data)
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
    //console.log("setting data to box :", box)
    this.setState({box: box});
    //console.log("Value set in box checkign ... : ",this.state.box)
  }
    //http://facedetection-backend5466.herokuapp.com
    async setRank() {
    let response=await fetch('http://localhost:3001/setRank?email='+sessionStorage.getItem('email'))
    let data= await response.json()
    console.log(data)
 }




 onButtonSubmit =() =>{
     this.setState({imageUrl: this.state.input})
     app.models
     .predict(
       Clarifai.FACE_DETECT_MODEL,
       this.state.input)
     .then(response => {
       console.log('hi', response)
       this.displayFaceBox(this.calculateFaceLocation(response))
       this.setRank();
     })
     .catch(err => console.log(err));
 }


  particalsOption={
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


 



  render() {

    

    return (
      <div>
        <Nagigation />
        <Particles className="particals" params={this.particalsOption} 
        />
        <Logo />
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
