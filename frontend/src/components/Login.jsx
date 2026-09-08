import React from "react";
import { Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import toast  from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
      username :"",
      password :"",
  
    })
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onSubmitHandler = async(e) => {
      e.preventDefault();
     try {      
      const res = await axios.post('https://chat-app-1-ltob.onrender.com/api/v1/user/login', user, {
        headers:{
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      
        navigate('/');
      dispatch(setAuthUser(res.data));     
      } catch (error) {
      toast.error(error.response.data.message);
       console.log(error);
       
    }
      setUser({
      username :"",
      password :"",
      })
      
    }
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                user name :
              </span>
            </label>
            <input
            value={user.username}
            onChange={(e) => setUser({...user, username:e.target.value})}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="enter your username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Password :
              </span>
            </label>
            <input
             value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="enter your password"
            />
          </div>
            
          <div className="w-full mx-auto flex items-center text-center">
            <p className="text-white text-center my-2">
               Don't have  account ? 
                <Link to="/register" className="text-white" > Signup 
                </Link>
           </p>
            </div>
         
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border-black-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
