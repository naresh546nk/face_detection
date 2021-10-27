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


  

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top d-flex flex-row "> 

     
         <h3  className="navbar-brand">{userName}</h3>


      <div className="ms-auto">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ">
               <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={()=>{clearSession()}} href="/Login">Login</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active "  onClick={()=>{clearSession()}}  href="/">Logout</a>
               </li>

              </ul>
           </div>
       </div>

  </nav>


    )
  
}

export default Naiv;
