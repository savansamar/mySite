import React,{useState,useEffect} from 'react';
import { authenticate, isAuthenticated, signin } from './FormBackend';
import { Redirect } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const FormSignIn = () => {
    const [values,setValues]=useState({
        email:"savan@gmail.com",
        password:"savan1234",
        error:"",
        loading:"",
        success:"",
        redirect:""
    })
    const [didRedirect,setDidRedirect]=useState(false)

    const {email,password,error,loading,success,redirect}=values
    const {user}=isAuthenticated()
    const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };


    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            if (data.error) {
              setValues({ ...values, error: data.error, success:false ,loading: false });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                
                  success:true,
                  redirect:true
                });
               
              });
            }
          })
          .catch(console.log("signin request failed"));
      };

      ///redirect
      const performRedirect = () =>{
       return(
        <Redirect to="/Cart" />
      )
       }
 //successMessage
      const successMessage=()=>{
        
        toast.success("loading...")
        
    }
    const errorMessage=()=>{
       toast.warn("error during login...")
    }
    useEffect(()=>{
       success&&setTimeout(()=>{
          setDidRedirect(true)
        },2000)
            didRedirect&&performRedirect()
    },[success])
    
  return (
    <>
    <div class="font-sans "> 
    {success&&successMessage()}
    {error&&errorMessage()}
    {didRedirect&&performRedirect()}
            <div class="bg-yellow-500 flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div class="relative sm:max-w-sm w-full">
                    <div class="relative w-full rounded-3xl px-4  bg-gray-100 shadow-md">
                        <label for="" class="block text-sm text-gray-700 text-center font-semibold">
                            SignIn
                        </label>
                        <form method="#" action="#" class="mt-10">
                                           
                           
                            <div class=" ">                
                                <input 
                                onChange={handleChange("email")}
                                value={email} 
                                type="email" placeholder="Email" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />                           
                            </div>

                            <div class="mt-7">                
                                <input
                                onChange={handleChange("password")}
                                value={password}
                                type="password" placeholder="Contraseña" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />                           
                            </div>

                            <div class="mt-7 flex">
                                
                
                               <div class="w-full text-right">     
                                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                       Forgot passowrd
                                    </a>                                  
                               </div>
                            </div>
                
                            <div class="mt-7">
                                <button onClick={onSubmit} class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                login
                                </button>
                            </div>
                
                            <div class="flex mt-7 items-center text-center">
                                <hr class="border-gray-300 border-1 w-full rounded-md" />
                                <label class="block font-medium text-sm text-gray-700 w-full">
                                    Accede con
                                </label>
                                <hr class="border-gray-300 border-1 w-full rounded-md" />
                            </div>
                
                            <div class="flex mt-7 justify-center w-full">
                                <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    
                                    Facebook
                                </button>
                
                                <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    
                                    Google
                                </button>
                            </div>
                
                            <div class="mt-7">
                                <div class="flex justify-center items-center">
                                    <label class="w-full text-sm text-gray-600">Work</label>
                                    <a href="#" class="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        SignUp
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  
  )
    
};

export default FormSignIn;