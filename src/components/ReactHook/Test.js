import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data); console.log("error : ", errors)};
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tc ma2 pa2 from">
      FirstName: <input {...register("firstName", { required: true, maxLength: 20, minLength:5 })} /> <br/>
      {errors.firstName && <span>Invalid input</span>}
      <br/>
      LastName: <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /><br/>
      {errors.lastName && <span>invalid {console.log(errors)}</span>}
    
      <br/>
      Age: <input type="number" {...register("age", { min: 18, max: 99 })} /><br/>
      <input disabled={errors.lastName || errors.firstName} className="bg-red" type="submit" />

      <div className="input_field radio_option">
      <div class="input_field radio_option">
                    <input type="radio" name="radiogroup1" id="rd1" />
                    <label for="rd1">Male</label>
                    <input type="radio" name="radiogroup1" id="rd2" />
                    <label for="rd2">Female</label>
        </div>
         </div>
    </form>
  );
}