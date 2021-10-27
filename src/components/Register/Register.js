
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import * as Yup from 'yup'
import {yepResolver, yupResolver} from '@hookform/resolvers/yup'
import  'tachyons'
import './Register.scss'



const Register= (props) => {

    const ValidationSchema=Yup.object().shape({
        email: Yup.string()
                .required("Email id is rquired")
                .min(10, "Email length should not be less then 10 characters")
                .max(40 ,"Email length should not be gratter then 40 characters")
                .email("Email is Invalid pleae put correct Email !"),

        password: Yup.string()
                .required("Password is required. ")
                .min(8 , "minimum 8 Characters ")
                .max(16, "Maximum 16 Charactors "),

        re_password : Yup.string()
                .required("Conform password is required. ")
                .oneOf([Yup.ref('password')],"Conform password should be  same as password !"),

        name: Yup.string()
                .required("Name is required ")
                .min(6, "Name should not be less then 6 characters ")
                .max(25, "Name should not be more then 25 charactores. "),
        checkbox:Yup.bool()
                .oneOf([true],"Accespt the Terms and conditions "),
        country: Yup.string()
                .required("Select country")


    })

    const formOption={resolver: yupResolver(ValidationSchema)}

    const {register, handleSubmit, watch, formState :{errors}} =useForm(formOption)
    const onSubmit=data =>(console.log(data), addUser(data))

    const [gender, setGender]= useState('Male');
    const [country ,setCountry]=useState('India');
    const [sqlError ,setSqlError]=useState();

    //console.log(watch('password'))
   // watch() ? console.log(errors):  console.log("not changed")
    
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
            //countory:country  //takeing data from hooks properties
            countory: data.countory
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
             Email:   <div className="input_field"> <div><i aria-hidden="true" className="fa fa-envelope"></i></div>
                    <input type="email" name="email" placeholder="Email" {...register('email')} />
                    <div className="text-danger"> {errors.email?.message}</div>
                </div>
            Password:  <div className="input_field"> <div><i aria-hidden="true" className="fa fa-lock"></i></div>
                    <input type="password" name="password" placeholder="Password"  {...register('password') }  />
                    <div className="text-danger"> {errors.password?.message}</div>
                </div>
            Re-Password <div className="input_field"> <div><i aria-hidden="true" className="fa fa-lock"></i></div>
                    <input type="password" name="password" placeholder="Re-type Password"{...register('re_password')}  />
                    <div className="text-danger"> {errors.re_password?.message}</div>
                </div>
               
            Name: <div className="input_field"> <div><i aria-hidden="true" className="fa fa-user"></i></div>
                        <input type="text" name="name" placeholder="Name"{...register('name')}  />
                        <div className="text-danger"> {errors.name?.message}</div>
                    </div>
   
         
            Gender: <div className="radio_option" >
                        <input type="radio" name="radiogroup1"  id="rd1" onClick={(e)=>setGender('Male') }/>
                        <label htmlFor="rd1">Male</label>
                        <input type="radio" name="radiogroup1" id="rd2" onClick={(e)=> setGender('Female')} />
                        <label htmlFor="rd2">Female</label>
                    </div>
            Country:  <div className="input_field select_option"   >
                        {/* <select onClick={(event)=>setCountry(event.target.value) }  > */}
                        <select  name="country" {...register('country')}>
                        <option value="India" >India</option>
                        <option value="USA">USA</option>
                        <option value="JAPAN"> JAPAN</option>
                        </select>
                        <div className="text-danger"> {errors.countory?.message}</div>
                        <div className="select_arrow"></div>
                    </div>
            Terms&Conditions: <div className="input_field checkbox_option"  >
                        <input type="checkbox" id="cb1" {...register('checkbox')} />
                        <label htmlFor="cb1">I agree with terms and conditions</label>
                        <div className="text-danger"> {errors.checkbox?.message}</div>
                    </div>

                    
                <input  className="button" type="submit" value="Register" />
                </form>
                <a href="/Login "><div className="f6">Already have an Account ? </div></a>
                <div className="tc-red">{sqlError} </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Register;