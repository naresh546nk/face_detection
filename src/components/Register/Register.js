
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import  'tachyons'
import './Register.scss'


const Register= (props) => {

    const {register, handleSubmit, watch, formState :{errors}} =useForm()
    const onSubmit=data =>(console.log(data), addUser(data))

    const [gender, setGender]= useState('Male');
    const [country ,setCountry]=useState('India');
    const [sqlError ,setSqlError]=useState();

    //console.log(watch('password'))
    watch() ? console.log(errors):  console.log("not changed")
    
    async function addUser(data) {
        //event.preventDefault();
       const requestOptions ={
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },

          body: JSON.stringify({ 
            name: data.name,
            email:data.email,
            password: data.password,
            gender: gender,  //takeing data from hooks properties
            countory:country  //takeing data from hooks properties
          })
         
        }
        console.log("body :", requestOptions.body)
        
        const response= await fetch('http://localhost:3001/user' , requestOptions);
        const json_data=response.json().then(d=>{
            if(d.message==='failed'){
                setSqlError(d.error.errors[0].message)
                console.log(d.error.errors[0].message)
                
            }
            else{
                sessionStorage.setItem("userName",data.name)
                sessionStorage.setItem("email",data.email)
                setSqlError(data.name +" is registered successfylly !" )
                setTimeout(()=>{props.history.push('/home',true)},2000)

            }
    
        })
     
        
    }

    return (
        <div className="form_wrapper ">
        <div className="form_container">
            <div className="title_container">
            <h2>Responsive Registration Form</h2>
            </div>
            <div className="row clearfix pa-5">
            <div className="">
                <form   onSubmit={handleSubmit(onSubmit)}> 
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                    <input type="email" name="email" placeholder="Email" {...register('email',{required:true , pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
                    {/* {console.log("validation : "+errors.email)} */}
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                    <input type="password" name="password" placeholder="Password"  {...register('password',{required:true ,
                     minLength:8 , maxLength:16}) }  />
                </div>
                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                    <input type="password" name="password" placeholder="Re-type Password"{...register('re-password',{required:true})}  />
                </div>
               
                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                        <input type="text" name="name" placeholder="Name"{...register('name',{required:true})}  />
                    </div>
   
         
                    <div className="radio_option" >
                        <input type="radio" name="radiogroup1" id="rd1" onClick={(e)=>setGender('Male') }/>
                        <label htmlFor="rd1">Male</label>
                        <input type="radio" name="radiogroup1" id="rd2" onClick={(e)=> setGender('Female')} />
                        <label htmlFor="rd2">Female</label>
                    </div>
                    <div className="input_field select_option"  >
                        <select onClick={(event)=>setCountry(event.target.value) } >
                        <option  >India</option>
                        <option >USA</option>
                        <option > JAPAN</option>
                        </select>
                        <div className="select_arrow"></div>
                    </div>
                    <div className="input_field checkbox_option"  >
                        <input type="checkbox" id="cb1" {...register('checkbox',{required:true})} />
                        <label htmlFor="cb1">I agree with terms and conditions</label>
                    </div>

                    
                <input  className="button" type="submit" value="Register" />
                </form>
                <a href="/Login"><span className="f6">Already have an Account ? </span></a>
                <span className="tc-red">{sqlError} </span>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Register;