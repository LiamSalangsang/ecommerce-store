import React, { useState, useEffect } from 'react';
import {FaRegEye,FaRegEyeSlash} from 'react-icons/fa6'
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({name:'', email:"", password:""})
  const [passwordShow,setPasswordShow] = useState(false)

  const handleShowPassword =()=>{
  setPasswordShow(!passwordShow)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (

    
  <>
  <span className=' absolute top-40 left-[10rem] md:top-0 md:left-[0] text-4xl font-bold '> Login</span>

    <div className='flex'>


    <section className='w-[100%] md:w-[65%] flex justify-center h-[100vh] items-center '>

        
          <form  className="w-[17rem]" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
              className='border border-purple-500 p-2 rounded-lg w-full'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
              className='border border-purple-500 p-2 rounded-lg w-full peer '
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
               <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
         *Required Valid Email
        </p>
            </div>
            <div className='relative'>
              <label htmlFor="password">Password:</label>
              <input
              className='border border-purple-500 p-2 rounded-lg w-full'
                type={passwordShow?"text":"password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
          <button className = 'absolute top-[52%] right-2' onClick = {handleShowPassword} >   {passwordShow?<FaRegEye size ={20}/>:<FaRegEyeSlash size={20}/>}</button>
            </div>
            
            <div className='w-full text-right'>
              {/* <button style = {gradientStyle} className = "hover:bg-red-50" type="submit">Sign Up</button> */}
              <Link to ='/'>Navigate</Link>
              
            </div>
            <div className='text-[0.75rem]'> New to TechVerse? <Link to='/userauth/signup' className='text-blue-500 hover:underline'>Create Account</Link></div>
          </form>
          </section>
      <img className='w-full h-[100vh] hidden md:block md:object-cover' src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61AcjipaumL.jpg" alt="" />
        
    </div>
  
  </>
  )
}

export default Login