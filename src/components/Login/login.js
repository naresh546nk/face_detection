import react ,{Component} from 'react'
import './login.css'
import App from '../../App'


import {Redirect } from 'react-router-dom'

import {useState} from 'react';






const Login = (props) =>{



    const [password, setPassword] = useState()
    const [email, setEmail] =  useState()
  
   
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
       const response = await fetch('http://localhost:3001/users/login', requestOptions);
       const json_data = await response.json();
       console.log("respones : ",json_data)
       if(json_data.status==400){
         console.log("error occured.  ")
       }else{
          props.history.push('/home')
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
            <input type="text" placeholder="username" onChange={(e)=>setEmail(e.target.value)}  />
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value) } />
            <button   onClick={(event)=>fetchData(event)}  > Login </button>
            <p className="message ">Not registered? <a href="http://localhost:3000/Register"><span className="f6">Create an account </span></a></p>
          </form>
        </div>
      </div>
    )
  

    }



export default Login;