import {  useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const { selectedUser } = useSelector(store => store.user);
const { messages } = useSelector(store => store.message);
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!selectedUser?._id) {
      console.log("No user selected");
      return;
    }

    try {
      axios.defaults.withCredentials = true;

      const res = await axios.post(
        `http://localhost:3000/api/v1/message/send/${selectedUser._id}`,
        { message },
      );

      console.log("Message sent:", res.data);
      dispatch(setMessages([...messages, res?.data?.newMessage]))

      setMessage("");
    } catch (error) {
      console.log("Send message error:", error);
    }
  };

  return (
    <form className='px-4 my-3' onSubmit={submitHandler}>
      <div className='w-full relative'>
        <input
          type="text"
          placeholder='send message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-500 text-white'
        />

        <button
          type="submit"
          className='absolute flex inset-y-0 end-0 items-center pr-4'
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;

