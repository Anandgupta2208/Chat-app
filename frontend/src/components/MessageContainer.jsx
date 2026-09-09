import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";


const MessageContainer = () => {
  const {selectedUser, authUser, onlineUsers} = useSelector(store => store.user);

  const isOnline = onlineUsers?.includes?.(selectedUser?._id);
   useGetRealTimeMessage();
  return (
    <>
    { selectedUser !== null ? (<div className='md:min-w-[550px] flex flex-col'>
     <div>
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img
              src={selectedUser?.profilePhoto}
              alt="user profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between  gap-2 ">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
   
    </div>
    <Messages/>
    <SendInput/>
    </div>

    ): (
  
<div className="flex flex-1 items-center justify-center">
  <h1 className="text-xl md:text-2xl font-semibold text-gray-300 bg-zinc-800 px-12 py-4 rounded-lg shadow-md min-w-[550px] text-center">
     Hi {authUser?.fullName} Let's start chatting 💬
  </h1>
</div>


    )
    }
    
    
    </>
  )
}

export default MessageContainer
