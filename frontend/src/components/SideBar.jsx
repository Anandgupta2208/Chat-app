import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers } from "../redux/userSlice";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {otherUsers} = useSelector(store => store.user);

  const submitHandler =(e)=>{
     e.preventDefault();
     const conversationUser = otherUsers?.filter((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
      if(conversationUser?.length >0){
        dispatch(setOtherUsers(conversationUser));
      }else{
        toast.error("User not found");
      }
    }
  const logoutHandler = async()=>{
  try {
      const res = await axios.get('https://chat-app-1-ltob.onrender.com/api/v1/user/logout')
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    
  } catch (error) {
    console.log(error);
  }

  }
  return (
    <div className='border-r border-slate-500 p-4 flex-col'>
      <form onSubmit={submitHandler} action="" className='flex items-center gap-1'>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='input input-bordered rounded-md text-black' type="text" placeholder='Search...' />

        <button type='submit' className='btn bg-zink-500 '>
            <FaSearch size="25px" />
            </button>
      </form>
      <div>
        <div className="divider lg:divider-horizontal px-3"></div>
        <OtherUsers/>
        <div className='mt-2y'>
          <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
