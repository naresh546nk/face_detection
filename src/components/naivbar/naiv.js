import React, { useEffect ,useState} from 'react'
import './navigation.css'
import  'tachyons'
import { useForm } from 'react-hook-form';


 const  Naiv= (props)=>  {
   const [userName, setUserName] =useState()
   const {watch } = useForm();



   const clearSession=() =>{
    sessionStorage.removeItem("userName")
    sessionStorage.removeItem("email")
  }
  useEffect(() => {
    setUserName(sessionStorage.getItem("userName"))
    return () => {

    };
  },[userName])


  
    return (


  

<nav class="navbar1 navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container1 ml0 tl tc">
    <a class="navbar-brand text-left" href="#">
      <h3 >{userName}</h3>
    </a>
  </div>
  <div class="container1"/>
    <div class="container1">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>{clearSession()}} href="/Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active "  onClick={()=>{clearSession()}}  href="/">Logout</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


    )
  
}

export default Naiv;
