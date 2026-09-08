import { useDispatch, useSelector } from "react-redux";
import { setSelectedUsers } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const {selectedUser, onlineUsers} = useSelector(store=> store.user);
  const isOnline = onlineUsers?.includes(user?._id);

  const selectedUserHandler = (user) => {
    
    dispatch(setSelectedUsers(user));
  }
  return (
    <div>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${selectedUser?._id === user?._id ? 'bg-zinc-500' :''} flex gap-2 items-center  hover:bg-zinc-700 rounded-sm p-2 cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="user profile" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between  gap-2 ">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </div>
  );
};

export default OtherUser;
