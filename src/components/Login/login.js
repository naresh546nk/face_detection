
import './login.css'
import {useState} from 'react';
import App from '../../App.js'






const Login = (props) =>{



    const [password, setPassword] = useState()
    const [email, setEmail] =  useState()
    const [sqlError ,setSqlError] = useState()
  
   
     async function fetchData(event) {
            event.preventDefault();
           const requestOptions ={
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                email: email,
                password:password
              })
            }
       const response = await fetch('http://localhost:3001/login', requestOptions);
       const json_data = await response.json();
       console.log("respones : ",json_data)
      
       if(json_data.result===null){
         console.log("error occured.  " , json_data)
         setSqlError(json_data.message)
         console.log("sqlError ",sqlError)
       }else{
          sessionStorage.setItem('userName' ,json_data.result.name)
          sessionStorage.setItem('email' ,json_data.result.email)
          props.history.push("/home" ,true)
       }
      
     }
    





    return(
        <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
            </div>
          </div>
          <form  className="login-form">
          {/* <form className="login-form"> */}
            <input type="text" placeholder="Eamil" onChange={(e)=>setEmail(e.target.value)}  />
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value) } />
            <button   onClick={(event)=>fetchData(event)}  > Login </button>
            <p className="message ">Not registered? <a href="http://localhost:3000/Register"><span className="f6">Create an account </span></a></p>
            <div >{sqlError}</div>
          </form>
        </div>
      </div>
    )
  

    }



export default Login;