import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";
const Signup = () => {
  const [user, setUser] = useState({
    fullName :"",
    username :"",
    password :"",
    confirmPassword : "",
    gender: "",

  })

  const navigate = useNavigate();

  const handleCheckBox = (gender) => {
     setUser({...user, gender})
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {      
      const res = await axios.post('https://chat-app-1-ltob.onrender.com/api/v1/user/register', user, {
        headers:{
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
      if (res.data.success) {
        navigate('/login')
        toast.success(res.data.message);
      }
      
    } catch (error) {
       toast.error(error.response.data.message);
       console.log(error);
       
    }
    // setUser({
    //    fullName :"",
    // username :"",
    // password :"",
    // confirmPassword : "",
    // gender: "",

    // })
    
  }
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Full name :
              </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({...user, fullName: e.target.value})}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="enter your full Name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                user name :
              </span>
            </label>
            <input
            value={user.username}
             onChange={(e) => setUser({...user, username: e.target.value})}
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
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm Password :
              </span>
            </label>
            <input
            value={user.confirmPassword}
             onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
             className="w-full input input-bordered h-10"
              type="password"
              placeholder="Please Confirm your Password"
            />
      <div className="flex items-center gap-6 my-4">
  {/* Male */}
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={user.gender === "male"}
      onChange={() => handleCheckBox("male")}
      className="checkbox checkbox-primary"
    />
    <span className="text-white text-sm font-medium">
      Male
    </span>
  </label>

  {/* Female */}
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={user.gender === "female"}
      onChange={() => handleCheckBox("female")}
      className="checkbox checkbox-primary"
    />
    <span className="text-white text-sm font-medium">
      Female
    </span>
  </label>
</div>
          </div>
          <div className="w-full mx-auto flex items-center text-center">
            <p className="text-white text-center my-2">
               already have an account ? 
                <Link to="/login" className="text-white" > Login
                </Link>
           </p>
            </div>
         
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border-black-700">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
