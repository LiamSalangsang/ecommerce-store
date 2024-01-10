import { motion } from "framer-motion";
import Header from "../components/commonUI/Header";
import Footer from "../components/commonUI/Footer";
import axios from "axios";
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Profile = () => {
  const navigate = useNavigate()
  const [profileDetails, setProfileDetails] = useState({id:'unauthorized',name:'unauthorized', email:'unauthorized'})
  
  useEffect(() => {
    getProfile()
  }, []);


  async function getProfile(){
    try {
      
      const data = await axios.get(`http://localhost:3000/auth/profile`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log(data.data.user)
      const {id,name,email} =  data.data.user
    
      setProfileDetails({id,name,email})
    } catch (error) {
      navigate('/userauth/signin')
    }
  }



  return (
    <>
      <Header />
      <div className="pt-[7rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto my-8 p-4 bg-white/20 backdrop-blur-md shadow-2xl rounded-md"
        >
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">User Details</h3>
              <p>
                <strong>id:</strong> { profileDetails.id}
              </p>
              <p>
                <strong>name:</strong> {profileDetails.name}
              </p>
              <p>
                <strong>email:</strong> {profileDetails.email}
              </p>
            </div>
          
          </div>
          <div className="flex justify-end"><button type= 'button' onClick = {()=>{localStorage.removeItem('token'); navigate('/')}} className= "bg-red-600 rounded-lg text-white font-bold p-2 mr-4 hover:bg-red-400 ease-in duration-200">Sign Out</button></div>
          {/* <div className="flex justify-end"><Link to = '/userauth/signin' onClick = {()=>{navigate('/')}} className= "bg-green-600 rounded-lg text-white font-bold p-2 mr-4 hover:bg-green-400 ease-in duration-200">Sign In</Link></div> */}
        </motion.div>
      </div>  
      
      <div>
        <div className="md:fixed md:bottom-0 w-full"><Footer/></div>
     </div>
     
    </>
  );
};

export default Profile;
